uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.05;
    modelPosition.y += sin(modelPosition.y * uFrequency.y - uTime) * 0.05;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedMatrix = projectionMatrix * viewPosition;

    gl_Position = projectedMatrix;
    vUv = uv;
}