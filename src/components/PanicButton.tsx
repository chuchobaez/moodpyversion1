import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function PanicButton({ navigation }) {
    const [seconds, setSeconds] = React.useState(60);
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            navigation.goBack();
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const startBreathing = () => {
        setIsActive(true);
    };

    return (
        <flexboxLayout style={styles.container}>
            <stackLayout className="card" style={styles.breathingCard}>
                {!isActive ? (
                    <>
                        <label className="text-2xl text-center mb-4 text-dark">
                            Respira conmigo 🫁
                        </label>
                        <label className="text-lg text-center mb-4 text-dark">
                            Tómate un minuto para encontrar calma y tranquilidad
                        </label>
                        <button
                            className="btn btn-primary"
                            onTap={startBreathing}
                        >
                            ✨ Comenzar
                        </button>
                    </>
                ) : (
                    <>
                        <label className="text-7xl font-bold mb-4 text-gradient text-center">
                            {seconds}
                        </label>
                        <label className="text-2xl text-center text-dark">
                            {seconds % 8 < 4 ? "Inhala lentamente... 🫁" : "Exhala suavemente... 😮‍💨"}
                        </label>
                    </>
                )}
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
    breathingCard: {
        width: "90%",
        maxWidth: 400,
    }
});