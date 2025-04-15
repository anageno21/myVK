// src/components/CinematicBrain.js
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import './CinematicBrain.css';

const CinematicBrain = () => {
  const sketchRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    let points = [];
    let t = 0;
    let noiseScale = 0.01;
    let phase = "tangle";
    let startTime;
    let duration = 5000;
    let pauseDuration = 1000;
    let center;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(800, 600);
        p.background(225, 220, 212); // RGB για το #E1DCD4
        center = p.createVector(p.width / 2, p.height / 2);
        points.push(center.copy());
        p.stroke('#173A37');
        p.strokeWeight(1.5);
        p.noFill();
        startTime = p.millis();
        console.log('p5.js canvas created successfully');
      };

      p.draw = () => {
        p.background(225, 220, 212, 20); // RGB για το #E1DCD4 με alpha 20

        if (phase === "tangle") {
          let timeElapsed = p.millis() - startTime;
          let angle = p.noise(t, t + 1000) * p.TWO_PI * 2;
          let step = p5.Vector.fromAngle(angle).mult(2); // Διορθώνω τη χρήση της fromAngle
          let last = points[points.length - 1].copy().add(step);
          points.push(last);
          t += noiseScale;

          drawLines(p, points);

          if (timeElapsed > duration) {
            phase = "pause";
            startTime = p.millis();
          }
        } else if (phase === "pause") {
          drawLines(p, points);
          if (p.millis() - startTime > pauseDuration) {
            phase = "untangle";
            startTime = p.millis();
          }
        } else if (phase === "untangle") {
          let timePassed = p.millis() - startTime;
          let pct = p.constrain(timePassed / 3000, 0, 1);

          p.background(225, 220, 212);

          p.beginShape();
          for (let i = 0; i < points.length; i++) {
            let original = points[i];
            let targetX = p.map(i, 0, points.length - 1, p.width / 4, 3 * p.width / 4);
            let targetY = p.height / 2;
            let interp = p5.Vector.lerp(original, p.createVector(targetX, targetY), pct); // Διορθώνω τη χρήση της lerp
            p.vertex(interp.x, interp.y);
          }
          p.endShape();

          if (pct === 1) {
            phase = "line";
          }
        } else if (phase === "line") {
          p.background(225, 220, 212);
          p.stroke('#173A37');
          p.strokeWeight(2);
          p.noFill();
          p.beginShape();
          for (let i = 0; i < points.length; i++) {
            let x = p.map(i, 0, points.length - 1, p.width / 4, 3 * p.width / 4);
            p.vertex(x, p.height / 2);
          }
          p.endShape();

          let endX = 3 * p.width / 4;
          let endY = p.height / 2;
          p.strokeWeight(2);
          p.stroke('#FF6F61');
          p.line(endX, endY, endX - 20, endY - 10);
          p.line(endX, endY, endX - 20, endY + 10);
        }
      };

      const drawLines = (p, pts) => {
        p.noFill();
        p.beginShape();
        for (let point of pts) {
          p.vertex(point.x, point.y);
        }
        p.endShape();
      };
    };

    try {
      p5InstanceRef.current = new p5(sketch, sketchRef.current);
      console.log('p5 instance created:', p5InstanceRef.current);
    } catch (error) {
      console.error('Error creating p5 instance:', error);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        console.log('p5 instance removed');
      }
    };
  }, []);

  return (
    <section className="cinematic-brain-section">
      <div className="container">
        <div className="svg-container" ref={sketchRef}></div>
      </div>
    </section>
  );
};

export default CinematicBrain;