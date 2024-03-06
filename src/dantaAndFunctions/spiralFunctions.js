// Definición de las funciones para calcular diferentes tipos de espirales

// Espiral Logarítmica
function logarithmicSpiral(t, a, b) {
    const x = a * Math.exp(b * t) * Math.cos(t);
    const y = a * Math.exp(b * t) * Math.sin(t);
    return { x, y };
}

// Espiral de Arquímedes
function archimedeanSpiral(theta, a, b) {
    const r = a + b * theta;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Espiral Hiperbólica
function hyperbolicSpiral(theta, a) {
    const r = a / theta;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Espiral Fermat
function fermatSpiral(theta, a) {
    const r = a * Math.sqrt(theta);
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Espiral de Bernoulli
function bernoulliSpiral(theta, a) {
    const r = a / (theta * theta);
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Espiral Lituus
function lituusSpiral(theta, a) {
    const r = Math.sqrt(a * theta);
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Exportación de las funciones
export {
    logarithmicSpiral,
    archimedeanSpiral,
    hyperbolicSpiral,
    fermatSpiral,
    bernoulliSpiral,
    lituusSpiral
};
