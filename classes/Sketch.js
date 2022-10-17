class Sketch {
  static sketch = () => {
    return ({ context, width, height }) => {
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);
    };
  };
}

export default Sketch;
