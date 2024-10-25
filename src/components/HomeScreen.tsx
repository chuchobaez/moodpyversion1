import { Dialogs, Application } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HomeScreen({ navigation }) {
    const [showEmergency, setShowEmergency] = React.useState(false);
    const isDarkMode = Application.systemAppearance() === "dark";

    const openEmergencyDialog = () => {
        setShowEmergency(true);
        Dialogs.action({
            message: "¿Cómo puedo ayudarte? 💜",
            cancelButtonText: "Cancelar",
            actions: ["📞 Llamar 911", "🫁 Ejercicio de Respiración", "💭 Próximamente"],
        }).then(result => {
            if (result === "📞 Llamar 911") {
                Dialogs.alert("Llamando al 911...");
            } else if (result === "🫁 Ejercicio de Respiración") {
                navigation.navigate("PanicButton");
            }
            setShowEmergency(false);
        });
    };

    return (
        <flexboxLayout style={styles.container}>
            <stackLayout className="card" style={styles.welcomeCard}>
                <label className="text-4xl font-bold mb-2 text-gradient text-center">
                    ¡Hola! ✨
                </label>
                <label className="text-xl mb-6 text-dark text-center">
                    ¿Cómo te sientes hoy?
                </label>
                
                <button
                    className="btn btn-primary mb-4"
                    onTap={() => navigation.navigate("GratitudeJournal")}
                >
                    📝 Escribir en mi diario
                </button>

                <button
                    className="btn btn-danger"
                    onTap={openEmergencyDialog}
                >
                    💜 Necesito ayuda
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    welcomeCard: {
        width: "90%",
        maxWidth: 400,
    }
});