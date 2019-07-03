#include <emscripten/emscripten.h>

extern "C" double EMSCRIPTEN_KEEPALIVE  add(double a, double b)
{
    return a+b;
}

extern "C" double EMSCRIPTEN_KEEPALIVE  sub(double a, double b)
{
    return a-b;
}

extern "C" double EMSCRIPTEN_KEEPALIVE  mul(double a, double b)
{
    return a*b;
}

extern "C" double EMSCRIPTEN_KEEPALIVE  dvi(double a, double b)
{
    return a/b;
}
