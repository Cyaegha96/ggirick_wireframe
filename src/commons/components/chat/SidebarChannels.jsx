import React from "react";
import { Link } from "react-router-dom";

export default function SidebarChannels() {
    return (
      <aside className="flex w-64 flex-col border-r border-base-300 bg-base-100 text-base-content">
        {/* 상단 제목 영역 */}
        <div className="border-b border-base-300 p-4">
          <h2 className="text-lg font-semibold">개발자 워크스페이스</h2>
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 overflow-y-auto px-4 py-2">
          {/* 채널 섹션 */}
          <h3 className="mb-2 text-xs uppercase text-base-content/70">Channels</h3>
          <ul className="space-y-1">
            <li className="rounded-lg px-3 py-2 hover:bg-base-200">
              <div className="flex items-center justify-between">
                <span># general</span>
                <Link to="/ggirick_wireframe/videomeeting">
                  <button className="btn btn-xs btn-primary rounded-full">
                    화상회의
                  </button>
                </Link>
              </div>
            </li>

            <li className="rounded-lg px-3 py-2 hover:bg-base-200">
              <div className="flex items-center justify-between">
                <span># random</span>
                <button className="btn btn-xs btn-primary rounded-full">
                  화상회의
                </button>
              </div>
            </li>

            <li className="rounded-lg px-3 py-2 hover:bg-base-200">
              <div className="flex items-center justify-between">
                <span># dev</span>
                <button className="btn btn-xs btn-primary rounded-full">
                  화상회의
                </button>
              </div>
            </li>
          </ul>

          {/* DM 섹션 */}
          <h3 className="mt-4 mb-2 text-xs uppercase text-base-content/70">
            Direct Messages
          </h3>
          <ul className="space-y-1">
            <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-base-200">
              @ Alice
            </li>
            <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-base-200">
              @ Bob
            </li>
          </ul>
        </nav>
      </aside>
    );
}
