import styled from "styled-components";
import ScheduleCard from "./ScheduleCard";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 230px 230px 230px 230px 230px 230px;
  grid-template-rows: 310px 310px;
  justify-content: center;
  align-content: start;
  height: 700px;
  width: 100%;
`;

const CALENDAR_INFO = [
  // ENERO
  {
    title: "ENERO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
    ],
  },
  //FEBRERO
  {
    title: "FEBRERO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "11",
        text: "Virgen de Lourdes",
        expandedText:
          "Se realiza un triduo que comienza el 8 de febrero a las 6 de la tarde durante los próximos 3 días. El día de la fiesta es el 11 de febrero a las 6 de la tarde. Durante la eucaristía se recuerdan las apariciones de la Virgen de Lourdes a Bernadette Soubirous. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "15",
        text: "Lengua de San Antonio",
        expandedText:
          "Se realiza un Triduo que comienza el 12 de febrero a las 6 de la tarde durante los próximos 3 días. El día de la fiesta es el 15 de febrero y se realiza a las 11 de la mañana, el mismo día se realiza un ágape con todos los invitados y se reparte pan a los pobres. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "26",
        text: "Justo juez (viernes siguiente a la imposición de la ceniza)",
        expandedText:
          "La fiesta del Justo Juez se celebra el siguiente viernes a la imposición de la ceniza el miércoles de ceniza, por eso la fecha cambia cada año. Al señor del Justo Juez se le realiza novena que comienza el 17 de febrero a las 6 de la tarde durante los próximos 9 días. El día de la fiesta es celebrada a las 10:30 de la mañana del 26 de febrero. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //MARZO
  {
    title: "MARZO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "14",
        text: "Jesús Nazareno",
        expandedText:
          "Al Jesús Nazareno se le celebra una novena que comienza el 5 de marzo a las 6 de la tarde durante los próximos 9 días. La fiesta se celebra a las 10:30 de la mañana el 14 de marzo. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "28",
        text: "Domingo de Ramos",
        expandedText: "Se realiza la bendición de ramos junto a 2 o 3 misas.",
      },
      {
        date: "29",
        text: "Lunes Santo",
        expandedText:
          "Confesiones y misas a las 4:45, 5:00 y 7:00 de la tarde.",
      },
      {
        date: "30",
        text: "Martes Santo",
        expandedText:
          "Confesiones y misas a las 4:45, 5:00 y 7:00 de la tarde.",
      },
      {
        date: "31",
        text: "Miércoles Santo",
        expandedText:
          "Confesiones y misas a las 4:45, 5:00 y 7:00 de la tarde.",
      },
    ],
  },
  //ABRIL
  {
    title: "ABRIL",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "1-4",
        text: "Semana Santa",
        expandedText:
          "La semana Santa en Arequipa, como en casi todo el mundo, inicia 40 días antes a esta, comenzando con el miércoles de ceniza iniciando la llamada cuaresma. Terminado el periodo de tiempo llamado Cuaresma inicia la semana Santa con:",
      },
      {
        date: "1",
        text: "Jueves Santo",
        expandedText:
          "Confesiones en la mañana, se realiza la institución de la eucaristía a las 5 de la tarde, junto al lavado de pies y la procesión del santísimo.",
      },
      {
        date: "2",
        text: "Viernes Santo",
        expandedText:
          "Vía crucis a las 10 de la mañana, ese día no se realiza misas, a las 3 o 4 de la tarde se realiza la Adoración a la cruz.",
      },
      {
        date: "3",
        text: "Sábado Santo",
        expandedText:
          "Se realiza la soledad de la virgen de las Angustias a las 4 de la tarde, un sermón y a las 5:30 sale una procesión de la virgen de las Angustias, finalmente se realiza la vigilia pascual. Ese día no hay misas.",
      },
      {
        date: "4",
        text: "Domingo de Pascua",
        expandedText:
          "Se celebra una misa de resurrección a las 4:45. 5 y 7 de la tarde.",
      },
      {
        date: "11",
        text: "Señor de la divina misericordia.",
        expandedText:
          "La fiesta del señor de la divina misericordia es celebrada cada siguiente domingo de Pascua, según el relato esto fue declarado así por el mismo Jesús hacia María Faustina, por eso la fecha varia cada año, siendo esto igual a nivel mundial. Se celebra un Triduo el 8 de abril a las 6 de la tarde durante los próximos 3 días. La fiesta comienza a las 7 de la noche del 11 de abril. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //MAYO
  {
    title: "MAYO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "4",
        text: "San Benito de Palermo",
        expandedText:
          "Tradicionalmente su fiesta es el 4 de abril, pero por choque de fechas, en este caso semana santa, la iglesia de San Francisco la celebra el 4 de mayo. Se le realiza una novena que comienza el 25 de abril a las 5 de la tarde durante los próximos 9 días. El día de la fiesta se realiza a las 6 de tarde del 4 de mayo. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //JUNIO
  {
    title: "JUNIO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "13",
        text: "San Antonio de Padua",
        expandedText:
          "Se realiza una novena que comienza el 4 de junio a las 6 de la tarde durante los próximos 9 días. El día de la fiesta comienza a las 11 de la mañana, seguido de la repartición del pan a los pobres y un ágape para los invitados, la Pía Unión de San Antonio de Padua brinda un locro durante el ágape. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "27",
        text: "Sagrado corazón de Jesús",
        expandedText:
          "La fiesta es celebrada cada ultimo domingo de junio, por eso la fecha varia cada año. Se le realiza una novena que comienza el 18 de junio a las 6 de la tarde durante los próximos 9 días. La fiesta se celebra a las 10:30 de la mañana, Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //JULIO
  {
    title: "JULIO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "20",
        text: "Divino Niño",
        expandedText:
          "Se realiza un triduo el 17 de julio a las 6 de la tarde durante los próximos 3 días. El día de fiesta es el 20 de julio a las 6 de la tarde. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //AGOSTO
  {
    title: "AGOSTO",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "11",
        text: "Santa Clara",
        expandedText:
          "Se realiza un triduo el 8 de agosto a las 6 de la tarde durante los próximos 3 días. La fiesta el 11 de agosto a las 6 de la tarde. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "29",
        text: "Virgen del perpetuo socorro.",
        expandedText:
          "La fecha tradicional de la fiesta es el 27 de junio, pero por choque de fechas con otra fiesta, en este caso el sagrado corazón de Jesús, la fiesta se celebra el último domingo de agosto, también por eso la fecha varia cada año. Se realiza una novena que empezaría el 20 de agosto a las 6 de la tarde durante los próximos 9 días, el día de la fiesta se realiza a las 10:30 de la mañana el 29 de agosto. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //SEPTIEMBRE
  {
    title: "SEPTIEMBRE",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "12",
        text: "Virgen de las Angustias",
        expandedText:
          "Se realiza un triduo el 9 de setiembre a las 6 de la tarde durante los próximos 3 días. La fiesta se da el 12 de setiembre a las 6 de la tarde. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //OCTUBRE
  {
    title: "OCTUBRE",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "4",
        text: "San Francisco de Asís",
        expandedText:
          "Siendo el santo más importante de la iglesia y el convento tiene mas actividades en su honor. Comienza con un convite el 24 de setiembre, donde se reúnen sus fieles a participar de la fiesta, siendo los invitados la gente que vive cerca y amigos de la fraternidad. Se le celebra una novena que comienza el 25 de setiembre a las 6 de la tarde duarte los próximos 9 días. El día de la víspera en el año 2019 se celebró la tradicional procesión del paso, procesión en la cual San Francisco de Asís y Santo Domingo de Guzmán se hallaron en la plaza de Armas de Arequipa y se dieron el abrazo, símbolo de su hermandad. El día de la fiesta es el 4 de octubre a las 6 de tarde, por el se tocan las campanas de la torre de la iglesia. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "31",
        text: "San Judas Tadeo",
        expandedText:
          "En la iglesia de San Francisco suelen celebrar a San Judas Tadeo el domingo siguiente mas cercano al 28 de octubre. Su novena comienza el 22 de octubre a las 7 de la noche durante los próximos 9 días. La fiesta se celebra el 31 de octubre a las 10:30 de la mañana. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //NOVIEMBRE
  {
    title: "NOVIEMBRE",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "2",
        text: "Virgen del Carmen",
        expandedText:
          "Se celebra un triduo el 30 de octubre a las 8 de la mañana durante los próximos 3 días. La fiesta se celebra el 2 de noviembre a las 8 de la mañana. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
  //DICIEMBRE
  {
    title: "DICIEMBRE",
    items: [
      {
        date: "",
        text: "Misa Matutina 7 a 9 mañana",
        expandedText: "Misa Matutina 7 a 9 mañana",
      },
      {
        date: "",
        text: "Misa vespertina 5 a 9 tarde",
        expandedText: "Misa vespertina 5 a 9 tarde",
      },
      {
        date: "8",
        text: "Virgen de la Inmaculada Concepción",
        expandedText:
          "Se celebra una novena el 29 de noviembre a las 6 de la tarde durante los próximos 9 días. La fiesta se celebra el 8 de diciembre a las 10:30 de la mañana. Durante la novena y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "12",
        text: "Virgen de Guadalupe",
        expandedText:
          "Se celebra un triduo el 9 de diciembre a las 6 de la tarde durante los próximos 3 dias. La fiesta se celebra el 12 de diciembre a las 6 de la tarde. Esta virgen es la única que tiene el derecho a estar en medio del altar mayor durante su fiesta, sin contar a la virgen de la inmaculada concepción. También la cofradía encargada de la Virgen de Guadalupe realiza diferentes homenajes, en la víspera ofrecen ponche a los que asisten y los de la colonia mexicana y le cantan. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
      {
        date: "18",
        text: "Señora del Amparo",
        expandedText:
          "Se celebra un triduo el 15 de diciembre a las 6 de la tarde durante los próximos 3 dias. La fiesta se celebra el 18 de diciembre a las 6 de la tarde. Durante el triduo y el día de fiesta se realiza la eucaristía.",
      },
    ],
  },
];

function Calendar() {
  return (
    <CalendarContainer>
      {CALENDAR_INFO.map((month) => {
        return (
          <ScheduleCard title={month.title} items={month.items}></ScheduleCard>
        );
      })}
    </CalendarContainer>
  );
}

export default Calendar;
