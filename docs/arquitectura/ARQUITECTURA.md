# Arquitectura del proyecto

## Principios

1. El proyecto no necesita mas dependencias. 0 dependencias externas.
2. Utilizamos TypeScript estrictamente para trabajar con tipado estatico.
3. Sin implementaciones extras, tienes que concentrarte en la tarea que se esta trabajando.
4. Errores explicitos, las funciones que fallan deben lanzar excepciones nombradas.
5. Buenas practicas de React 19.

## Evitar 

1. Demasiado re-renders entre los componentes, evitarlo.
2. Comentarios dentro del codigo del proyecto.
3. Escribir/leer el archivo en cada operacion en bucle. Carga el inicio, modifica en memoria y guarda al final.
