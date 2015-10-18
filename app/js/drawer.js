export default function drawParticle(ctx, particle) {
  ctx.beginPath();
  ctx.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.stroke();
}
