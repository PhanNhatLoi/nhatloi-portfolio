"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

type Props = {
  data: {
    content: string;
    time: Date[];
    position?: string;
    organization?: string;
  }[];
};

const TimeLine = (props: Props) => {
  const { data } = props;

  return (
    <Timeline
      style={{
        padding: 0,
        paddingBottom: "70px",
      }}
      position="alternate"
    >
      {data.map((item, index) => {
        return (
          <TimelineItem key={index} className="w-full">
            <TimelineOppositeContent>
              <div className="font-bold">{item.position}</div>
              <div className="italic">{item.organization}</div>
              <div className="italic">
                {"("}
                {item.time
                  .map((ti) =>
                    ti.toLocaleString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  )
                  .join(" - ")}
                {")"}
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
                style={{ width: "100%" }}
                className="w-full bg-slate-500 p-2 rounded shadow-black shadow-md"
              />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default TimeLine;
