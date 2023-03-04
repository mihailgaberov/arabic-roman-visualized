export function AnimatedDisplay({romanNumberGetter}) {
  return (
      <input name='roman' value={romanNumberGetter()}/>
  );
}