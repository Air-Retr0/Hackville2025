import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CiBellOn } from "react-icons/ci";
import {
  BookOpen,
  Clock,
  FileText,
  Folder,
  GraduationCap,
  Home,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  count?: number;
  to?: string;
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
  { icon: <Home className="h-5 w-5" />, label: "Dashboard", to: "/" },
  { icon: <BookOpen className="h-5 w-5" />, label: "Courses", count: 5, to: "/academic" },
  { icon: <FileText className="h-5 w-5" />, label: "Assignments", count: 3, to: "/assignments" },
  { icon: <Clock className="h-5 w-5" />, label: "Schedule", to: "/scheduling" },
  { icon: <GraduationCap className="h-5 w-5" />, label: "Grades", to: "/grades" },
  { icon: <Folder className="h-5 w-5" />, label: "Resources", to: "/resources" },
  { icon: <Settings className="h-5 w-5" />, label: "Settings", to: "/settings" },
];

const defaultRecentItems: RecentItem[] = [
  {
    title: "Week 5 Assignment",
    course: "CSE 111",
    type: "Assignment",
    timestamp: "Due Today",
  },
  {
    title: "Course Materials",
    course: "CSE 433",
    type: "Lecture",
    timestamp: "Held at 14:30 LSA C",
  },
  {
    title: "Midterm Study Guide",
    course: "CSE 212",
    type: "Document",
    timestamp: "Posted Yesterday",
  },
];

const Sidebar = ({
  menuItems = defaultMenuItems,
  recentItems = defaultRecentItems,
  onMenuItemClick = () => { },
  onRecentItemClick = () => { },
}: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 w-[280px] h-screen bg-white border-r p-4 flex flex-col">
      <ScrollArea className="flex-1">
        <div className="space-y-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.to || "#"} className="w-full">
                <Button
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
              </Link>
            ))}
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3 px-2 flex items-center">
              Notifications <CiBellOn className="ml-2 text-xl" />
            </h3>
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
