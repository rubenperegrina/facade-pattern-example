import { InventorySubsystem } from "../classes/Inventory-subsystem";
import { NotificationSubsystem } from "../classes/notification-subsystem";
import { OrderSubsystem } from "../classes/order-subsystem";

export class ECommerceFacade {
    private inventory: InventorySubsystem;
    private order: OrderSubsystem;
    private notification: NotificationSubsystem;

    constructor() {
        this.inventory = new InventorySubsystem();
        this.order = new OrderSubsystem();
        this.notification = new NotificationSubsystem();
    }

    placeOrder(productId: string, quantity: number): void {
        const productAvailable = this.inventory.checkStock(productId);
        if (productAvailable) {
            const orderId = this.order.createOrder(productId, quantity);
            this.notification.sendNotification(orderId);
        } else {
            console.log('Producto no disponible en el inventario');
        }
    }
}