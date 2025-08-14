// modal-sim.ts

type ButtonAction = () => void;

interface ModalConfig {
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  showCloseIcon: boolean;
  width: number;
  onConfirm: ButtonAction;
  onCancel: ButtonAction;
}

class ModalBuilder {
  private config: ModalConfig = {
    title: "",
    message: "",
    confirmText: "OK",
    cancelText: "Cancel",
    showCloseIcon: true,
    width: 400,
    onConfirm: () => {},
    onCancel: () => {},
  };

  static create() {
    return new ModalBuilder();
  }

  title(title: string) { this.config.title = title; return this; }
  message(message: string) { this.config.message = message; return this; }
  confirmText(text: string) { this.config.confirmText = text; return this; }
  cancelText(text: string) { this.config.cancelText = text; return this; }
  showCloseIcon(show = true) { this.config.showCloseIcon = show; return this; }
  width(px: number) { this.config.width = px; return this; }
  onConfirm(action: ButtonAction) { this.config.onConfirm = action; return this; }
  onCancel(action: ButtonAction) { this.config.onCancel = action; return this; }

  build(): ModalConfig {
    // simple validation example
    if (!this.config.title) throw new Error("Modal title is required");
    if (!this.config.message) throw new Error("Modal message is required");
    return { ...this.config };
  }
}

/**
 * Simulated showModal for Node/TS:
 * - Logs what would render
 * - Returns an API to "click" confirm/cancel programmatically
 */
function showModal(cfg: ModalConfig) {
  console.log("=== MODAL OPEN ===");
  console.log(`Title:   ${cfg.title}`);
  console.log(`Message: ${cfg.message}`);
  console.log(`Width:   ${cfg.width}px`);
  console.log(`[ ${cfg.cancelText} ]  [ ${cfg.confirmText} ]`);
  console.log("==================");

  return {
    confirm() {
      console.log(`→ Click: "${cfg.confirmText}"`);
      cfg.onConfirm();
      console.log("=== MODAL CLOSE ===");
    },
    cancel() {
      console.log(`→ Click: "${cfg.cancelText}"`);
      cfg.onCancel();
      console.log("=== MODAL CLOSE ===");
    }
  };
}

// ===== Usage (simulation) =====
const deleteModal = ModalBuilder.create()
  .title("Delete item")
  .message("Are you sure you want to delete this item?")
  .confirmText("Yes, delete")
  .cancelText("Cancel")
  .width(500)
  .onConfirm(() => console.log("Item deleted"))
  .onCancel(() => console.log("Canceled"))
  .build();

// This object can now be passed directly to your modal component
const ui = showModal(deleteModal);

// Simulate user actions:
ui.confirm(); // try ui.cancel() to simulate the other path
