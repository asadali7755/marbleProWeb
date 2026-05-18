interface Options {
  dull: boolean;
  hue?: number;
  vein?: number;
}

export function marbleSvg({ dull, hue = 35, vein = 0.18 }: Options): string {
  const sat = dull ? 12 : 28;
  const light = dull ? 78 : 88;
  const grime = dull ? 0.4 : 0.05;
  const veinOpacity = dull ? vein * 0.5 : vein;
  const shine = dull ? 0 : 0.65;
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'><defs><radialGradient id='g' cx='30%' cy='20%' r='80%'><stop offset='0%' stop-color='hsl(${hue}, ${sat}%, ${light + 8}%)'/><stop offset='60%' stop-color='hsl(${hue}, ${sat}%, ${light - 4}%)'/><stop offset='100%' stop-color='hsl(${hue}, ${sat - 6}%, ${light - 16}%)'/></radialGradient><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${dull ? 1.4 : 0.8}' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.10 0 0 0 0 0.08 0 0 0 ${grime} 0'/></filter><filter id='shine'><feGaussianBlur stdDeviation='40'/></filter></defs><rect width='100%' height='100%' fill='url(#g)'/><rect width='100%' height='100%' filter='url(#n)' opacity='0.9'/><g stroke='hsl(${hue}, 22%, ${light - 40}%)' stroke-opacity='${veinOpacity}' fill='none'><path d='M-50 120 Q 200 60 480 180 T 900 140' stroke-width='1.4'/><path d='M-50 320 Q 240 240 520 360 T 900 300' stroke-width='1.1'/><path d='M-50 480 Q 180 380 460 520 T 900 460' stroke-width='1.6'/><path d='M120 -50 Q 240 200 180 460 T 280 700' stroke-width='0.9'/></g><ellipse cx='28%' cy='22%' rx='40%' ry='18%' fill='white' opacity='${shine * 0.35}' filter='url(#shine)'/><ellipse cx='75%' cy='80%' rx='30%' ry='12%' fill='white' opacity='${shine * 0.2}' filter='url(#shine)'/></svg>`)}`;
}
