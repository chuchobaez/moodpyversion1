import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Dialogs } from '@nativescript/core';

export function GratitudeJournal() {
    const [entry, setEntry] = React.useState({
        moodRating: 5,
        dailyNote: "",
        pros: "",
        cons: "",
        gratitude1: "",
        gratitude2: "",
        gratitude3: "",
    });

    const saveEntry = () => {
        Dialogs.alert({
            title: "¡Guardado! 🌟",
            message: "Tu entrada ha sido guardada exitosamente.",
            okButtonText: "¡Genial!"
        });
    };

    const moodNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const moodEmojis = ["😢", "😕", "😐", "🙂", "😊", "😄", "😃", "🤗", "🥳", "🤩"];

    return (
        <gridLayout rows="*,auto" className="container">
            <scrollView row="0">
                <stackLayout className="card">
                    <label className="text-3xl font-bold mb-4 text-gradient text-center">
                        Mi Diario de Gratitud ✨
                    </label>

                    <label className="text-xl mb-2 text-dark text-center">
                        ¿Cómo calificarías tu día?
                    </label>
                    
                    <wrapLayout horizontalAlignment="center" padding="10">
                        {moodNumbers.map((num, index) => (
                            <button
                                key={num}
                                className={`mood-rating mood-${num}`}
                                onTap={() => setEntry({...entry, moodRating: num})}
                                style={{
                                    opacity: entry.moodRating === num ? 1 : 0.6,
                                    transform: entry.moodRating === num ? 'scale(1.1)' : 'scale(1)'
                                }}
                            >
                                {moodEmojis[index]}
                            </button>
                        ))}
                    </wrapLayout>

                    <label className="text-xl mb-2 text-dark">Cuéntame sobre tu día ✍️</label>
                    <textView
                        className="input"
                        hint="¿Qué hiciste hoy? ¿Cómo te sentiste?"
                        text={entry.dailyNote}
                        onTextChange={(e) => setEntry({...entry, dailyNote: e.value})}
                        height={120}
                    />

                    <label className="text-xl mb-2 text-dark">Lo positivo del día 🌟</label>
                    <textView
                        className="input"
                        hint="¿Qué momentos te hicieron sonreír?"
                        text={entry.pros}
                        onTextChange={(e) => setEntry({...entry, pros: e.value})}
                        height={80}
                    />

                    <label className="text-xl mb-2 text-dark">Oportunidades de mejora 🌱</label>
                    <textView
                        className="input"
                        hint="¿Qué aprendizajes te llevas?"
                        text={entry.cons}
                        onTextChange={(e) => setEntry({...entry, cons: e.value})}
                        height={80}
                    />

                    <label className="text-xl mb-2 text-dark">Gratitud del día 🙏</label>
                    <textField
                        className="input"
                        hint="1. Hoy agradezco..."
                        text={entry.gratitude1}
                        onTextChange={(e) => setEntry({...entry, gratitude1: e.value})}
                    />
                    <textField
                        className="input"
                        hint="2. También agradezco..."
                        text={entry.gratitude2}
                        onTextChange={(e) => setEntry({...entry, gratitude2: e.value})}
                    />
                    <textField
                        className="input"
                        hint="3. Y estoy muy agradecido/a por..."
                        text={entry.gratitude3}
                        onTextChange={(e) => setEntry({...entry, gratitude3: e.value})}
                    />
                </stackLayout>
            </scrollView>

            <button
                row="1"
                className="btn btn-primary m-4"
                onTap={saveEntry}
            >
                ✨ Guardar mi día
            </button>
        </gridLayout>
    );
}