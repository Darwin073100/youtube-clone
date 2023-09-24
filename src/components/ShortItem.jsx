import React from "react";

function ShortItem() {
  return (
    <div className="short-item">
      <div className="shorts-content-image">
        <img
          src="https://www.sdpnoticias.com/resizer/l84X60AVUNgJmUrSem4pkdk_tgc=/440x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/5NEXY44F6BF4BMZ64LBRYKDHQ4.png"
          alt="uuf"
        />
      </div>
      <div className="shorts-content-body">
        <p>
          <strong>¡Flautas de Res! Con Karely Ruiz 🔥...</strong>
        </p>
        <span>6.2 M de vistas</span>
      </div>
    </div>
  );
}

export { ShortItem };
