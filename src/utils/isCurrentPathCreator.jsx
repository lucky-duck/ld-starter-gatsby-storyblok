export default function isCurrentPathCreator(location) {
  return function isCurrentPath(to) {
    return location.pathname === to;
  };
}
