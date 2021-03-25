import styled from "styled-components";
import ScheduleCard from "./ScheduleCard";
import { useTranslation } from "next-i18next";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 230px 230px 230px 230px 230px 230px;
  grid-template-rows: 340px 340px;
  justify-content: center;
  align-content: start;
  height: 700px;
  width: 100%;
`;

function Calendar() {
  const { t } = useTranslation();

  const CALENDAR_INFO = [
    // ENERO
    {
      title: t("convent-events.jan"),
      image: "/images/liturgic_calendar/san-francisco-de-asis-foto3.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
      ],
    },
    //FEBRERO
    {
      title: t("convent-events.feb"),
      image: "/images/liturgic_calendar/estatua-virgen-de-lourdes.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "11",
          text: t("convent-events.feb-11-name"),
          expandedText: t("convent-events.feb-11-details"),
        },
        {
          date: "15",
          text: t("convent-events.feb-15-name"),
          expandedText: t("convent-events.feb-15-details"),
        },
        {
          date: "26",
          text: t("convent-events.feb-26-name"),
          expandedText: t("convent-events.feb-26-details"),
        },
      ],
    },
    //MARZO
    {
      title: t("convent-events.mar"),
      image: "/images/liturgic_calendar/mes-morado.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "14",
          text: t("convent-events.mar-14-name"),
          expandedText: t("convent-events.mar-14-details"),
        },
        {
          date: "28",
          text: t("convent-events.mar-28-name"),
          expandedText: t("convent-events.mar-28-details"),
        },
        {
          date: "29",
          text: t("convent-events.mar-29-name"),
          expandedText: t("convent-events.mar-29-details"),
        },
        {
          date: "30",
          text: t("convent-events.mar-30-name"),
          expandedText: t("convent-events.mar-30-details"),
        },
        {
          date: "31",
          text: t("convent-events.mar-31-name"),
          expandedText: t("convent-events.mar-31-details"),
        },
      ],
    },
    //ABRIL
    {
      title: t("convent-events.apr"),
      image: "/images/liturgic_calendar/large_semana-santa.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "1-4",
          text: t("convent-events.apr-1-4-name"),
          expandedText: t("convent-events.apr-1-4-details"),
        },
        {
          date: "1",
          text: t("convent-events.apr-1-name"),
          expandedText: t("convent-events.apr-1-details"),
        },
        {
          date: "2",
          text: t("convent-events.apr-2-name"),
          expandedText: t("convent-events.apr-2-details"),
        },
        {
          date: "3",
          text: t("convent-events.apr-3-name"),
          expandedText: t("convent-events.apr-3-details"),
        },
        {
          date: "4",
          text: t("convent-events.apr-4-name"),
          expandedText: t("convent-events.apr-4-details"),
        },
        {
          date: "11",
          text: t("convent-events.apr-11-name"),
          expandedText: t("convent-events.apr-11-details"),
        },
      ],
    },
    //MAYO
    {
      title: t("convent-events.may"),
      image: "/images/liturgic_calendar/santo-de-palermo-san-benito.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "4",
          text: t("convent-events.may-4-name"),
          expandedText: t("convent-events.may-4-details"),
        },
      ],
    },
    //JUNIO
    {
      title: t("convent-events.jun"),
      image: "/images/liturgic_calendar/san-antonio-de-padua.png",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "13",
          text: t("convent-events.jun-13-name"),
          expandedText: t("convent-events.jun-13-details"),
        },
        {
          date: "27",
          text: t("convent-events.jun-27-name"),
          expandedText: t("convent-events.jun-27-details"),
        },
      ],
    },
    //JULIO
    {
      title: t("convent-events.jul"),
      image: "/images/liturgic_calendar/divino-nino.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "20",
          text: t("convent-events.jul-20-name"),
          expandedText: t("convent-events.jul-20-details"),
        },
      ],
    },
    //AGOSTO
    {
      title: t("convent-events.aug"),
      image: "/images/liturgic_calendar/santa-clara.png",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "11",
          text: t("convent-events.aug-11-name"),
          expandedText: t("convent-events.aug-11-details"),
        },
        {
          date: "29",
          text: t("convent-events.aug-29-name"),
          expandedText: t("convent-events.aug-29-details"),
        },
      ],
    },
    //SEPTIEMBRE
    {
      title: t("convent-events.sep"),
      image: "/images/liturgic_calendar/virgen-de-las-angustias.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "12",
          text: t("convent-events.sep-12-name"),
          expandedText: t("convent-events.sep-12-details"),
        },
      ],
    },
    //OCTUBRE
    {
      title: t("convent-events.oct"),
      image: "/images/liturgic_calendar/san-francisco-de-asis.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "4",
          text: t("convent-events.oct-4-name"),
          expandedText: t("convent-events.oct-4-details"),
        },
        {
          date: "31",
          text: t("convent-events.oct-31-name"),
          expandedText: t("convent-events.oct-31-details"),
        },
      ],
    },
    //NOVIEMBRE
    {
      title: t("convent-events.nov"),
      image: "/images/liturgic_calendar/virgen-del-carmen.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "2",
          text: t("convent-events.nov-2-name"),
          expandedText: t("convent-events.nov-2-details"),
        },
      ],
    },
    //DICIEMBRE
    {
      title: t("convent-events.dec"),
      image: "/images/liturgic_calendar/inmaculada-concepcion.jpg",
      items: [
        {
          date: "",
          text: t("convent-events.mass-hours-1"),
          expandedText: t("convent-events.mass-hours-1"),
        },
        {
          date: "",
          text: t("convent-events.mass-hours-2"),
          expandedText: t("convent-events.mass-hours-2"),
        },
        {
          date: "8",
          text: t("convent-events.dec-8-name"),
          expandedText: t("convent-events.dec-8-details"),
        },
        {
          date: "12",
          text: t("convent-events.dec-12-name"),
          expandedText: t("convent-events.dec-12-details"),
        },
        {
          date: "18",
          text: t("convent-events.dec-18-name"),
          expandedText: t("convent-events.dec-18-details"),
        },
      ],
    },
  ];

  console.log(CALENDAR_INFO);

  return (
    <CalendarContainer>
      {CALENDAR_INFO.map((month) => {
        return (
          <ScheduleCard
            title={month.title}
            items={month.items}
            src={month.image}
          ></ScheduleCard>
        );
      })}
    </CalendarContainer>
  );
}

export default Calendar;
