"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timerId);
  }, [timeLeft, isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(TOTAL_TIME);
  };

  const angle = (timeLeft / TOTAL_TIME) * 360;

  const chartData = [
    {
      name: "time",
      value: 100,
      fill: "var(--blue)",
    },
  ];

  const chartConfig = {
    value: {
      label: "timer",
    },
    time: {
      label: "time",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <>
      <Header />
      <section>
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
                <RadialBar dataKey="value" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
    </>
  );
}
