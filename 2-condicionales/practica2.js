function evaluarNota(nota) {
    if (nota >= 90) {
        console.log(`Nota: ${nota} - Excelente. ¡Felicidades!`);
    } else if (nota >= 75) {
        console.log(`Nota: ${nota} - Bien. ¡Buen trabajo!`);
    } else if (nota >= 60) {
        console.log(`Nota: ${nota} - Suficiente. Puedes mejorar.`);
    } else {
        console.log(`Nota: ${nota} - No aprobado. ¡Sigue esforzándote!`);
    }
}

// Pruebas con diferentes valores
evaluarNota(95);
evaluarNota(80);
evaluarNota(65);
evaluarNota(45);
evaluarNota(0);