import Wall from './wall.js';

export default function buildWalls(xBound, yBound)  {
  const xSelector = vector => vector.x;
  const ySelector = vector => vector.y;
  const xSpeedTransformer = particle => {
    particle.speed.x = particle.speed.x * -1
  };
  const ySeepdTransformer = particle => {
    particle.speed.y = particle.speed.y * -1
  };
  const topWall = new Wall(0, ySelector, ySeepdTransformer);
  const botWall = new Wall(yBound, ySelector, ySeepdTransformer);
  const leftWall = new Wall(0, xSelector, xSpeedTransformer);
  const rightWall = new Wall(xBound, xSelector, xSpeedTransformer);
  return [topWall, botWall, leftWall, rightWall];
}
