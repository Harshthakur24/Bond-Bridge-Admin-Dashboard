"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {

  XAxis,
  YAxis,
  CartesianGrid,

  AreaChart,
  Area,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  LineChart,
  Line,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  LabelList,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { TrendingUp, Bell } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Sidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"
// import { useTheme } from "next-themes"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"



// Add this new mock data
const engagementData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const barChartData = [
  { name: "Mon", posts: 120, comments: 240, shares: 150 },
  { name: "Tue", posts: 300, comments: 139, shares: 221 },
  { name: "Wed", posts: 230, comments: 380, shares: 191 },
  { name: "Thu", posts: 270, comments: 220, shares: 161 },
  { name: "Fri", posts: 180, comments: 340, shares: 246 },
  { name: "Sat", posts: 390, comments: 281, shares: 172 },
  { name: "Sun", posts: 190, comments: 190, shares: 131 },
]

const pieChartData = [
  { name: "Photos", value: 4344, color: "#0ea5e9" },
  { name: "Videos", value: 5435, color: "#f43f5e" },
  { name: "Stories", value: 1443, color: "#8b5cf6" },
  { name: "Reels", value: 3443, color: "#10b981" },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

// Add this with your other mock data at the top
const chartData = [
  { month: "January", desktop: 150, mobile: 90 },
  { month: "February", desktop: 220, mobile: 170 },
  { month: "March", desktop: 180, mobile: 140 },
  { month: "April", desktop: 250, mobile: 200 },
  { month: "May", desktop: 280, mobile: 220 },
  { month: "June", desktop: 300, mobile: 260 },
]

// Add this chart data with your other mock data
const radialChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

// Add this to your chartConfig object
const updatedChartConfig = {
  ...chartConfig,
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

// First, add this new chart data near your other chart data
const exerciseChartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

const exerciseConfig = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// Add this new mock data at the top with your other data
const sparklineData = {
  users: [
    { value: 110.2 },
    { value: 118.5 },
    { value: 121.3 },
    { value: 125.7 },
    { value: 128.4 },
  ],
  posts: [
    { value: 15.8 },
    { value: 22.1 },
    { value: 31.5 },
    { value: 41.8 },
    { value: 45.2 },
  ],
  engagement: [
    { value: 21.2 },
    { value: 22.5 },
    { value: 23.1 },
    { value: 24.3 },
    { value: 24.8 },
  ],
  revenue: [
    { value: 38.5 },
    { value: 40.2 },
    { value: 42.5 },
    { value: 44.1 },
    { value: 45.2 },
  ],
};

// Add this new mock data
const recentTransactions = [
  {
    id: "1",
    user: {
      name: "Sarah Smith",
      email: "sarah.smith@example.com",
      avatar: "/avatars/01.png"
    },
    amount: 450.00,
    status: "completed",
    date: "2024-03-15"
  },
  {
    id: "2",
    user: {
      name: "Michael Johnson",
      email: "michael.j@example.com",
      avatar: "/avatars/02.png"
    },
    amount: 890.50,
    status: "pending",
    date: "2024-03-14"
  },
  // Add more transactions...
];

const topContent = [
  {
    id: "1",
    title: "10 Tips for Better Social Media Engagement",
    views: 45892,
    engagement: 8.9,
    author: "John Doe",
    status: "trending"
  },
  {
    id: "2",
    title: "The Ultimate Guide to Content Creation",
    views: 38721,
    engagement: 7.5,
    author: "Jane Smith",
    status: "stable"
  },
  // Add more content items...
];

const systemHealth = [
  {
    service: "API Server",
    status: "operational",
    uptime: "99.9%",
    responseTime: "45ms"
  },
  {
    service: "Database",
    status: "warning",
    uptime: "98.5%",
    responseTime: "120ms"
  },
  // Add more services...
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar className="hidden lg:block border-r pt-6 shrink-0" />

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <Badge variant="outline" className="text-sm">
                  v1.0
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Welcome back, here&apos;s what&apos;s happening today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128.4K</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-emerald-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+2.5%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40px] opacity-30">
                  <LineChart
                    data={sparklineData.users}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Posts</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45.2K</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-emerald-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+180.1%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40px] opacity-30">
                  <AreaChart
                    data={sparklineData.posts}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-emerald-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+5.2%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40px] opacity-30">
                  <BarChart
                    data={sparklineData.engagement}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45.2K</div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-emerald-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+8.1%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40px] opacity-30">
                  <LineChart
                    data={sparklineData.revenue}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* First row of charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8 mb-8">
            {/* Platform Engagement Card */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Platform Engagement</CardTitle>
                <CardDescription>
                  Showing total visitors for the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    data={engagementData}
                    height={240}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Area
                      dataKey="mobile"
                      type="natural"
                      fill="var(--color-mobile)"
                      fillOpacity={0.4}
                      stroke="var(--color-mobile)"
                      stackId="a"
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stroke="var(--color-desktop)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Monthly Platform Usage Card */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Platform Usage</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart
                    data={engagementData}
                    height={240}
                    className="w-full"
                    margin={{
                      top: 5,
                      right: 20,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Second row with other charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
            {/* Content Performance Card */}
            <Card className="col-span-4">
              <CardHeader className="pb-2">
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Daily engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={barChartData}
                  height={240}
                  className="w-full"
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip />
                  <Bar
                    dataKey="posts"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="comments"
                    fill="hsl(var(--secondary))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="shares"
                    fill="hsl(var(--accent))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-xs font-medium">Posts</span>
                    </div>
                    <div className="text-lg font-bold">2,451</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      +12.2%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(var(--secondary))" }} />
                      <span className="text-xs font-medium">Comments</span>
                    </div>
                    <div className="text-lg font-bold">3,873</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      +8.4%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(var(--accent))" }} />
                      <span className="text-xs font-medium">Shares</span>
                    </div>
                    <div className="text-lg font-bold">1,543</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      +15.3%
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-6">
                <div className="flex w-full items-center justify-between gap-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">Peak day:</span> Saturday
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">Total engagement:</span> 7,867
                  </div>
                </div>
              </CardFooter>

              <CardContent className="pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <RadarChart data={chartData}>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <PolarAngleAxis dataKey="month" />
                    <PolarGrid />
                    <Radar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      fillOpacity={0.6}
                    />
                    <Radar dataKey="mobile" fill="var(--color-mobile)" />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </CardFooter>
            </Card>

            {/* Recent Activity Card */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
                <CardDescription>By content type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[120px] items-center justify-center">
                  <PieChart width={200} height={120}>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2">
                  {pieChartData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {entry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Add the new Exercise Stats chart */}
              <CardHeader className="pt-4">
                <CardTitle>Exercise Stats</CardTitle>
                <CardDescription>Daily activity breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={exerciseConfig}>
                  <BarChart accessibilityLayer data={exerciseChartData} height={120}>
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          weekday: "short",
                        })
                      }}
                    />
                    <Bar
                      dataKey="running"
                      stackId="a"
                      fill="var(--color-running)"
                      radius={[0, 0, 4, 4]}
                    />
                    <Bar
                      dataKey="swimming"
                      stackId="a"
                      fill="var(--color-swimming)"
                      radius={[4, 4, 0, 0]}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          hideLabel
                          className="w-[180px]"
                          formatter={(value, name, item, index) => (
                            <>
                              <div
                                className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                                style={{
                                  "--color-bg": `var(--color-${name})`,
                                } as React.CSSProperties}
                              />
                              {exerciseConfig[name as keyof typeof exerciseConfig]?.label || name}
                              <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                {value}
                                <span className="font-normal text-muted-foreground">kcal</span>
                              </div>
                              {index === 1 && (
                                <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                                  Total
                                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                    {item.payload.running + item.payload.swimming}
                                    <span className="font-normal text-muted-foreground">kcal</span>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        />
                      }
                      cursor={false}
                      defaultIndex={1}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* New Third Row - Line Chart */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    height={240}
                    className="w-full"
                    margin={{
                      top: 5,
                      right: 20,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                      dataKey="desktop"
                      type="monotone"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="mobile"
                      type="monotone"
                      stroke="var(--color-mobile)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      Showing total visitors for the last 6 months
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* You might want to add another card here */}
            <Card className="col-span-3">
              <CardHeader className="items-center pb-0">
                <CardTitle>Browser Distribution</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={updatedChartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <RadialBarChart
                    data={radialChartData}
                    startAngle={-90}
                    endAngle={380}
                    innerRadius={30}
                    outerRadius={110}
                  >
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel nameKey="browser" />}
                    />
                    <RadialBar dataKey="visitors" background>
                      <LabelList
                        position="insideStart"
                        dataKey="browser"
                        className="fill-white capitalize mix-blend-luminosity"
                        fontSize={11}
                      />
                    </RadialBar>
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Chrome leads with 30% market share <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Based on total visitor analytics
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={transaction.user.avatar} />
                            <AvatarFallback>{transaction.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{transaction.user.name}</span>
                            <span className="text-xs text-muted-foreground">{transaction.user.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* System Health Status */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Real-time system metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((service) => (
                    <div key={service.service} className="flex items-center justify-between p-2 rounded-lg border">
                      <div className="flex items-center gap-2">
                        {service.status === 'operational' ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : service.status === 'warning' ? (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <div>
                          <p className="text-sm font-medium">{service.service}</p>
                          <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{service.responseTime}</p>
                        <p className="text-xs text-muted-foreground">Response Time</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Most engaged posts and articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContent.map((content) => (
                    <div key={content.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{content.title}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{content.views.toLocaleString()} views</Badge>
                          <Badge variant="outline">{content.engagement}% engagement</Badge>
                        </div>
                      </div>
                      <Badge variant={content.status === 'trending' ? 'default' : 'secondary'}>
                        {content.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendar/Schedule */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
                <CardDescription>Upcoming events and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span>Team Meeting (2:00 PM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Content Review (4:30 PM)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
