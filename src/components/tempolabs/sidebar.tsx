import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Clock,
  FileText,
  Folder,
  GraduationCap,
  Home,
  Settings,
} from "lucide-react";
import Avatar from "../avatar";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  count?: number;
}

interface RecentItem {
  title: string;
  course: string;
  type: string;
  timestamp: string;
}

interface SidebarProps {
  menuItems?: MenuItem[];
  recentItems?: RecentItem[];
  onMenuItemClick?: (label: string) => void;
  onRecentItemClick?: (item: RecentItem) => void;
}

const defaultMenuItems: MenuItem[] = [
  { icon: <Home className="h-5 w-5" />, label: "Dashboard" },
  { icon: <BookOpen className="h-5 w-5" />, label: "Courses", count: 5 },
  { icon: <FileText className="h-5 w-5" />, label: "Assignments", count: 3 },
  { icon: <Clock className="h-5 w-5" />, label: "Schedule" },
  { icon: <GraduationCap className="h-5 w-5" />, label: "Grades" },
  { icon: <Folder className="h-5 w-5" />, label: "Resources" },
  { icon: <Settings className="h-5 w-5" />, label: "Settings" },
];

const defaultRecentItems: RecentItem[] = [
  {
    title: "Week 5 Assignment",
    course: "Mathematics 101",
    type: "Assignment",
    timestamp: "2 hours ago",
  },
  {
    title: "Course Materials",
    course: "Physics 201",
    type: "Resource",
    timestamp: "4 hours ago",
  },
  {
    title: "Midterm Study Guide",
    course: "Chemistry 301",
    type: "Document",
    timestamp: "Yesterday",
  },
];

const Sidebar = ({
  menuItems = defaultMenuItems,
  recentItems = defaultRecentItems,
  onMenuItemClick = () => { },
  onRecentItemClick = () => { },
}: SidebarProps) => {
  return (
    <div className="w-[280px] h-full bg-white border-r p-4 flex flex-col min-h-screen">
      <ScrollArea className="flex-1">
        <div className="space-y-6">
          {/* Main Menu */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start gap-3 h-10"
                onClick={() => onMenuItemClick(item.label)}
              >
                {item.icon}
                <span className="flex-1 text-left">{item.label}</span>
                {item.count && (
                  <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
                    {item.count}
                  </span>
                )}
              </Button>
            ))}
          </div>

          <Separator />

          {/* Recent Items */}
          <div>
            <h3 className="font-semibold mb-3 px-2">Recent Activity</h3>
            <div className="space-y-2">
              {recentItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start p-3 h-auto"
                  onClick={() => onRecentItemClick(item)}
                >
                  <div className="flex flex-col items-start gap-1 text-left">
                    <span className="font-medium">{item.title}</span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{item.course}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.timestamp}</span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-44">
          <Avatar />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;