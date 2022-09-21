exports.date = function () {
      //Obtencion de fecha
      let today = new Date();

      let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
      };

      let day = today.toLocaleDateString("es-CO", options);
    return day;
  }
