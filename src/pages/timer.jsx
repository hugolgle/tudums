"use client";

import { useState, useEffect, useRef } from "react";
import tudums from "/Tudums.png";
import son from "/sontudums.mp3";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import Header from "../composant/header";

const TOTAL_TIME = 30;

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(son);

    const loadAudio = () => {
      audioRef.current.load();
      setAudioReady(true);
    };

    document.addEventListener("click", loadAudio, { once: true });

    return () => {
      document.removeEventListener("click", loadAudio);
    };
  }, []);

  useEffect(() => {
    let timerId;

    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setShowImage(true);

      if (audioReady && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback error:", err);
        });
      }

      setIsRunning(false);
      timerId = setTimeout(() => {
        setShowImage(false);
        setTimeLeft(TOTAL_TIME);
      }, 3000);
    }

    return () => clearTimeout(timerId);
  }, [timeLeft, isRunning, audioReady]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(TOTAL_TIME);
    setShowImage(false);
  };

  const angle = (timeLeft / TOTAL_TIME) * 360;

  const chartData = [
    {
      name: "time",
      value: 100,
      fill: "var(--red)",
    },
  ];

  const chartConfig = {
    value: {
      label: "timer",
    },
    time: {
      label: "time",
      color: "hsl(var(--chart-10))",
    },
  };

  return (
    <>
      <Header />
      {showImage ? (
        <img
          src={tudums}
          className="absolute z-50 animate__animated animate__jackInTheBox animate__faster"
        />
      ) : (
        <section>
          <h1 className="font-logo text-black animate__animated animate__zoomIn animate__faster">
            Timer
          </h1>
          <p className="text-black animate__animated animate__zoomIn animate__faster">
            Activate the sounds*
          </p>
          <Card className="flex flex-col shadow-none bg-transparent border-none animate__animated animate__zoomIn animate__faster">
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="h-[200px] w-[200px]"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={90}
                  endAngle={90 - angle}
                  innerRadius={80}
                  outerRadius={110}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    polarRadius={[86, 74]}
                  />
                  <RadialBar dataKey="value" cornerRadius={10} />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="text-4xl"
                              >
                                {timeLeft}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Seconds
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
              <div className="flex justify-center mt-4 space-x-4">
                <Button
                  onClick={startTimer}
                  color=""
                  disabled={isRunning || timeLeft === 0}
                >
                  Start
                </Button>
                <Button onClick={resetTimer}>Reset</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </>
  );
}
