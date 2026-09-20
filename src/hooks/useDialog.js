import { useEffect, useRef } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/**
 * Shared dialog behaviour: escape to close, background scroll lock, and the
 * focus handling a modal needs to be usable from a keyboard.
 *
 * Without this, opening a modal leaves focus on the trigger behind the
 * overlay, tabbing walks off into the page underneath, and closing drops
 * focus at the top of the document.
 *
 * Returns a ref to attach to the dialog element, which needs tabIndex={-1}
 * so it can take focus when it contains nothing focusable.
 */
export default function useDialog(isOpen, onClose) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const node = dialogRef.current;

    // Recomputed on each Tab: a dialog's contents can change while it is open.
    const focusable = () =>
      node
        ? Array.from(node.querySelectorAll(FOCUSABLE)).filter(
            (el) => el.offsetParent !== null || el.tagName === "IFRAME"
          )
        : [];

    (focusable()[0] ?? node)?.focus?.();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      // Wrap at both ends so focus cannot leave the dialog.
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      // Send focus back where it came from, so closing doesn't lose the user's place.
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return dialogRef;
}
