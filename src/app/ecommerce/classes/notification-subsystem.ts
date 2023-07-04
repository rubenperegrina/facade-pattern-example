export class NotificationSubsystem {
    sendNotification(orderId: string): void {
        // Enviar una notificación sobre el pedido realizado
        console.log(`Notificación enviada para el pedido ${orderId}`);
    }
}