import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "高一嘉｜视频作品集",
  description: "高一嘉的视频作品集，涵盖短视频策划、拍摄、剪辑、内容运营、纪录片与企业项目。",
  applicationName: "高一嘉视频作品集",
  authors: [{ name: "高一嘉" }],
  creator: "高一嘉",
  openGraph: {
    title: "高一嘉｜视频作品集",
    description: "短视频策划、拍摄、剪辑与内容运营作品集。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/images/guixi-plan.jpg", alt: "高一嘉视频作品集" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
