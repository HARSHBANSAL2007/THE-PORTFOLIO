import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Honour the user's motion preference: if they've asked for reduced motion we
    // paint a single static frame and never start the loop.
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Size the backing store to the device pixel ratio so the render isn't
    // blurry on high-DPI screens, but cap it at 2 — beyond that we'd be pushing
    // 3x the pixels for no visible gain, which is what stalls phones.
    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();

    // Resize fires in bursts while dragging a window; rebuild at most once a frame.
    let resizeFrame = null;
    const handleResize = () => {
      if (resizeFrame !== null) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = null;
        sizeCanvas();
      });
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D tilt with momentum
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleMouseMove = (e) => {
      const normX = e.clientX / width - 0.5;
      const normY = e.clientY / height - 0.5;
      targetRotY = normX * 0.9;
      targetRotX = normY * 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Luminous Plasma Flakes / Cyber Embers (110 particles)
    // Phones get roughly half the particles: same look, far less per-frame work.
    const flakeCount = width < 768 ? 45 : 110;
    const flakes = Array.from({ length: flakeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 1.2,
      length: Math.random() * 5 + 2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.04,
      speedY: -(Math.random() * 1.2 + 0.6),
      speedX: (Math.random() - 0.5) * 0.4,
      driftFreq: Math.random() * 0.02 + 0.01,
      driftAmp: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      flickerOffset: Math.random() * 100,
      colorType: Math.random() > 0.6 ? "cyan" : Math.random() > 0.3 ? "cobalt" : "plasma",
    }));

    // Generate 3D Geodesic / Icosahedron Quantum Core Vertices
    // Golden ratio for icosahedron
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return { x: x / len, y: y / len, z: z / len };
    });

    // Edges connecting nearby vertices
    const edges = [];
    for (let i = 0; i < rawVertices.length; i++) {
      for (let j = i + 1; j < rawVertices.length; j++) {
        const dx = rawVertices[i].x - rawVertices[j].x;
        const dy = rawVertices[i].y - rawVertices[j].y;
        const dz = rawVertices[i].z - rawVertices[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    let time = 0;
    let coreAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.025;
      coreAngle += 0.005;

      currentRotY += (targetRotY - currentRotY) * 0.05;
      currentRotX += (targetRotX - currentRotX) * 0.05;

      // 1. Render 3D Quantum Neural Core (Original Geodesic Centerpiece)
      const centerX = width * 0.5;
      const centerY = height * 0.44;
      const scale = Math.min(width, height) * 0.36;

      const project = (x, y, z) => {
        // Multi-axis dynamic rotation
        const cosY = Math.cos(coreAngle + currentRotY);
        const sinY = Math.sin(coreAngle + currentRotY);
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        const cosX = Math.cos(currentRotX + 0.3);
        const sinX = Math.sin(currentRotX + 0.3);
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        const fov = 650;
        const depth = fov / (fov + z2 * scale + 240);
        return {
          x: centerX + x1 * scale * depth,
          y: centerY + y1 * scale * depth,
          depth: z2,
        };
      };

      const projectedVertices = rawVertices.map((v) => project(v.x, v.y, v.z));

      // Draw Inner Pulsating Singularity Core
      const pulseSize = (Math.sin(time * 2) * 0.15 + 0.85) * (scale * 0.25);
      const innerCoreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize * 2.5);
      innerCoreGrad.addColorStop(0, "rgba(56, 189, 248, 0.45)");
      innerCoreGrad.addColorStop(0.4, "rgba(37, 99, 235, 0.25)");
      innerCoreGrad.addColorStop(1, "transparent");
      ctx.fillStyle = innerCoreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw Geodesic Lattice Edges with Depth Shading
      edges.forEach(([i, j]) => {
        const p1 = projectedVertices[i];
        const p2 = projectedVertices[j];
        const avgDepth = (p1.depth + p2.depth) / 2;

        const alpha = Math.max(0.12, Math.min(0.65, (avgDepth + 1) * 0.35));
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = avgDepth > 0 ? 1.8 : 1.0;
        if (avgDepth > 0.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw Glowing Quantum Nodes at Vertices
      projectedVertices.forEach((p) => {
        const nodeAlpha = Math.max(0.2, Math.min(0.9, (p.depth + 1) * 0.45));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.depth > 0 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${nodeAlpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Dual Concentric Celestial Horizon Rings
      const drawRing = (radius, yLevel, color, widthLine, blurAmount, tilt) => {
        ctx.save();
        ctx.beginPath();
        const segments = 72;
        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          const rx = Math.cos(theta) * radius;
          const rz = Math.sin(theta) * radius;
          // Apply tilt
          const ry = yLevel + Math.sin(theta) * tilt;
          const p = project(rx, ry, rz);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.shadowBlur = blurAmount;
        ctx.shadowColor = color;
        ctx.stroke();
        ctx.restore();
      };

      drawRing(1.35, 0.05, "rgba(56, 189, 248, 0.65)", 2, 16, 0.15);
      drawRing(1.55, -0.05, "rgba(37, 99, 235, 0.4)", 1.2, 10, -0.15);

      // 2. Draw Rising Cyber Plasma Embers
      flakes.forEach((f) => {
        f.y += f.speedY;
        f.x += Math.sin(time + f.driftFreq * 100) * f.driftAmp + f.speedX;
        f.angle += f.spin;

        if (f.y < -20) {
          f.y = height + Math.random() * 40;
          f.x = Math.random() * width;
        }
        if (f.x < -20) f.x = width + 10;
        if (f.x > width + 20) f.x = -10;

        const flicker = Math.sin(time * 3 + f.flickerOffset) * 0.25;
        const currentOpacity = Math.max(0.2, Math.min(0.95, f.opacity + flicker));

        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.angle);

        let coreColor = "#3b82f6";
        let glowColor = "rgba(59, 130, 246, 0.85)";

        if (f.colorType === "cyan") {
          coreColor = "#38bdf8";
          glowColor = "rgba(56, 189, 248, 0.9)";
        } else if (f.colorType === "plasma") {
          coreColor = "#93c5fd";
          glowColor = "rgba(147, 197, 253, 0.95)";
        }

        ctx.shadowBlur = 14;
        ctx.shadowColor = glowColor;

        ctx.beginPath();
        ctx.moveTo(0, -f.length);
        ctx.lineTo(f.size, 0);
        ctx.lineTo(0, f.length * 0.7);
        ctx.lineTo(-f.size, 0);
        ctx.closePath();

        ctx.fillStyle = coreColor;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();

        if (f.size > 2.2) {
          ctx.beginPath();
          ctx.arc(0, 0, f.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = currentOpacity * 0.9;
          ctx.fill();
        }

        ctx.restore();
      });

      // A reduced-motion visitor gets exactly one frame — the scene, held still.
      if (!motionQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // A backgrounded tab still burns battery on rAF in some browsers, and the
    // frames are never seen. Stop on hide, resume on show.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!motionQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Re-evaluate if the visitor flips the preference while the page is open.
    const handleMotionChange = () => {
      cancelAnimationFrame(animationFrameId);
      render();
    };
    motionQuery.addEventListener("change", handleMotionChange);

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionChange);
      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background canvas rendering 3D Quantum Core and flame flakes */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />

      {/* Atmospheric Ambient Radiance in Deep Navy / Royal Blue */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: "radial-gradient(ellipse 95% 65% at 50% 38%, rgba(37, 99, 235, 0.2) 0%, rgba(15, 23, 42, 0.45) 50%, #060913 85%)"
        }}
      />

      {/* High-Tech Grid Pattern */}
      <div className="hairgrid absolute inset-0 opacity-55" />

      {/* Luminous Navy / Cyan Horizon Glow from bottom */}
      <div className="blue-horizon absolute inset-x-0 bottom-0 h-[75vh] opacity-90" />

      {/* Central Volumetric Glow */}
      <div className="pointer-events-none absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-blue-600/20 rounded-full blur-[190px]" />

      {/* Noise / Grain Filter overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.11] mix-blend-overlay">
        <svg className="h-full w-full contrast-150 grayscale filter" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
