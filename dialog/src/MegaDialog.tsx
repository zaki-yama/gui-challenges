export const MegaDialog = () => {
  return (
    <dialog id="MegaDialog" modal-mode="mega">
      <form method="dialog">
        <header>
          <h3>Dialog title</h3>
          <button onclick="this.closest('dialog').close('close')"></button>
        </header>
        <article>...</article>
        <footer>
          <menu>
            <button
              autofocus
              type="reset"
              onclick="this.closest('dialog').close('cancel')"
            >
              Cancel
            </button>
            <button type="submit" value="confirm">
              Confirm
            </button>
          </menu>
        </footer>
      </form>
    </dialog>
  );
};
