#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    vec3 color = vec3(
        0.5 + 0.5 * sin(u_time + uv.x * 6.0),
        0.5 + 0.5 * sin(u_time + uv.y * 6.0),
        0.8
    );

    gl_FragColor = vec4(color, 1.0);
}
