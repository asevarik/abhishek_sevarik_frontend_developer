import React, { useState } from "react";
import Card from "./Card";

const GridContainer = ({ data }) => {
  return (
    <div className="mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {data && data.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default GridContainer;
