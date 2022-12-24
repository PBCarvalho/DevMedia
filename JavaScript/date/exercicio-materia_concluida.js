const tecnologias = [
    { materia: "JavaScript", concluido: true },
    { materia: "React Native", concluido: false },
    { materia: "React", concluido: true },
    { materia: "Vue", concluido: false },
    { materia: "Angular", concluido: true },
];

for (const i in tecnologias) {
    if (tecnologias[i].concluido) {
        console.log(tecnologias[i].materia);
    }
}