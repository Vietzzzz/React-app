import React from "react";
import printer3d from "../assets/3D.jpg";
import cnc from "../assets/CNC.jpg";

const Proficiencies = () => {
  return (
    <div className="proficiency">
      <div className="proficiency-1">
        <img src={printer3d} alt="" />
        <div className="box">
          <p>
            We have at our disposal a vast array of high-capacity 3D printers,
            enabling us to efficiently create any desired product according to
            our customers' preferences within a short timeframe and at a
            reasonable cost.
          </p>
        </div>
      </div>
      <div className="proficiency-2">
        <div className="box">
          <p>
            Computer Numerical Control (CNC) cutting machines utilize computer
            control to accurately and efficiently cut fabrics, thereby reducing
            wastage and enabling the creation of intricate cutting patterns.
          </p>
        </div>
        <img src={cnc} alt="" />
      </div>
    </div>
  );
};

export default Proficiencies;
