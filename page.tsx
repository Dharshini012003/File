'use client';

import type React from 'react';
import {
    Building2,
    Sparkles,
    Users2,
    FileText,
} from 'lucide-react';
import DashboardCard from '../../../components/common/DashboardCard';
import OrganizationSection from './OrganizationSection';
import RecentProjectsSection from './RecentProjectSection';
import FilterPanel from './FilterPanel';
import ProjectTable from './ProjectTable';

const OverviewPage: React.FC = () => {
    return (
        <>
            <div className="bg-white min-h-screen p-6">
                {/* Header */}
                <div className="pb-6">
                    <h1 className="text-2xl font-bold">Overview</h1>
                    <p className="text-gray-500 text-[15px] font-[Open_Sans] mt-2">
                        Welcome Admin Name!
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <DashboardCard
                        title="Total Organizations"
                        count={487}
                        lastMonth={225}
                        thisYear={187500}
                        icon={<Building2 className="w-6 h-6" />}
                    />
                    <DashboardCard
                        title="Total Models"
                        count={78}
                        lastMonth={124}
                        thisYear={759}
                        icon={<Sparkles className="w-6 h-6" />}
                    />
                    <DashboardCard
                        title="Active Users"
                        count={17855}
                        lastMonth={822}
                        thisYear={87042}
                        icon={<Users2 className="w-6 h-6" />}
                    />
                    <DashboardCard
                        title="Total KYC Pending"
                        count={856}
                        lastMonth={227}
                        thisYear={11510}
                        icon={<FileText className="w-6 h-6" />}
                    />
                </div>

                {/* Bottom Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Organizations */}
                    <OrganizationSection />


                    {/* Recent Projects */}
                    <RecentProjectsSection />
                </div>
                {/* Filter Panel and Table */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 w-full">
                    <div className="md:col-span-4 w-full">
                        <FilterPanel />
                    </div>
                    <div className="md:col-span-8 w-full">
                        <ProjectTable />
                    </div>
                </div>

            </div>

        </>
    );
};

export default OverviewPage;
