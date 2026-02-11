import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';

const EnrollmentSlide = () => {
    const enrollmentData = [
        { course: "Electrician", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 48, enrollment: 45 },
        { course: "HVACR", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 22 },
        { course: "Electronic Application", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 20 },
        { course: "Fitter General", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 23 },
        { course: "Machinist", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 21 },
        { course: "Auto & Farm Machinery Mechanic", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 19 },
        { course: "Welder Arc & Gas", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 24 },
        { course: "Industrial Electronics", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 18 },
        { course: "Computer Operator", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 22 },
        { course: "Draftsman Civil", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 20 },
        { course: "Electrician", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 48, enrollment: 46 },
        { course: "Draftsman Mechanical", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 19 },
        { course: "Auto & Farm Machinery Mechanic", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 17 },
        { course: "Computer Operator", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 21 },
        { course: "National Competency Standards Chef Level 2", nature: "NCS", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 18 },
        { course: "NVC Level 2 Auto Electrician (CBT&A)", nature: "NVC", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 19 },
        { course: "NVC Level 3 IT (Web Dev) (CBT&A)", nature: "NVC", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 20 },
        { course: "NVC Level 2 Electrical (6M)", nature: "NVC", duration: "6M", shift: "Morning", capacity: 30, enrollment: 28 },
        { course: "NVC Level 2 Mechanical (Welder) (6M)", nature: "NVC", duration: "6M", shift: "Morning", capacity: 30, enrollment: 27 },
        { course: "Aluminium & Steel Fabricator (3M)", nature: "Short", duration: "3M", shift: "Morning", capacity: 20, enrollment: 18 },
        { course: "AI & Machine Learning (3M)", nature: "Short", duration: "3M", shift: "Morning", capacity: 20, enrollment: 20 }
    ];

    const totalCapacity = enrollmentData.reduce((sum, item) => sum + item.capacity, 0);
    const totalEnrollment = enrollmentData.reduce((sum, item) => sum + item.enrollment, 0);
    const utilizationPercent = ((totalEnrollment / totalCapacity) * 100).toFixed(1);
    const totalCourses = enrollmentData.length;

    const chartData = enrollmentData.map(item => ({
        name: item.course.length > 20 ? item.course.substring(0, 20) + '...' : item.course,
        Capacity: item.capacity,
        Enrollment: item.enrollment
    }));

    const highestEnrollment = enrollmentData.reduce((max, item) =>
        item.enrollment > max.enrollment ? item : max
    );

    const lowestEnrollment = enrollmentData.reduce((min, item) =>
        item.enrollment < min.enrollment ? item : min
    );

    const lowUtilization = enrollmentData.filter(item =>
        (item.enrollment / item.capacity) < 0.6
    );

    return (
        <div className="min-h-screen bg-white p-8 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B5D3B] to-[#1e3a8a] text-white px-8 py-4 rounded-t-2xl">
                <h1 className="text-3xl font-black uppercase tracking-tight">ENROLLMENT DATA (2025-26)</h1>
                <p className="text-sm font-medium mt-1 opacity-90">Govt. Technical Training Institute, Rahim Yar Khan</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-6 my-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <BookOpen className="mx-auto text-[#0B5D3B] mb-3" size={32} />
                    <h3 className="text-4xl font-black text-gray-800">{totalCourses}</h3>
                    <p className="text-sm font-semibold text-gray-600 mt-2">Total Courses</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <Users className="mx-auto text-[#1e3a8a] mb-3" size={32} />
                    <h3 className="text-4xl font-black text-gray-800">{totalCapacity}</h3>
                    <p className="text-sm font-semibold text-gray-600 mt-2">Total Capacity</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <Award className="mx-auto text-[#0B5D3B] mb-3" size={32} />
                    <h3 className="text-4xl font-black text-gray-800">{totalEnrollment}</h3>
                    <p className="text-sm font-semibold text-gray-600 mt-2">Total Enrollment</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <TrendingUp className="mx-auto text-green-600 mb-3" size={32} />
                    <h3 className="text-4xl font-black text-gray-800">{utilizationPercent}%</h3>
                    <p className="text-sm font-semibold text-gray-600 mt-2">Overall Utilization</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-6">
                {/* Course Table */}
                <div className="col-span-2 bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <div className="overflow-y-auto max-h-96">
                        <table className="w-full text-xs">
                            <thead className="bg-[#1e3a8a] text-white sticky top-0">
                                <tr>
                                    <th className="px-3 py-3 text-left font-bold">Course Name</th>
                                    <th className="px-2 py-3 text-center font-bold">Nature</th>
                                    <th className="px-2 py-3 text-center font-bold">Duration</th>
                                    <th className="px-2 py-3 text-center font-bold">Shift</th>
                                    <th className="px-2 py-3 text-right font-bold">Capacity</th>
                                    <th className="px-2 py-3 text-right font-bold">Enrollment</th>
                                    <th className="px-2 py-3 text-right font-bold">Variance</th>
                                    <th className="px-2 py-3 text-right font-bold">Util %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enrollmentData.map((row, index) => {
                                    const variance = row.capacity - row.enrollment;
                                    const utilization = ((row.enrollment / row.capacity) * 100).toFixed(0);
                                    return (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                                        >
                                            <td className="px-3 py-2 font-semibold text-gray-800">{row.course}</td>
                                            <td className="px-2 py-2 text-center text-gray-600">{row.nature}</td>
                                            <td className="px-2 py-2 text-center text-gray-600">{row.duration}</td>
                                            <td className="px-2 py-2 text-center">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold ${row.shift === 'Morning' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                                    }`}>
                                                    {row.shift}
                                                </span>
                                            </td>
                                            <td className="px-2 py-2 text-right font-bold text-gray-700">{row.capacity}</td>
                                            <td className="px-2 py-2 text-right font-bold text-[#0B5D3B]">{row.enrollment}</td>
                                            <td className={`px-2 py-2 text-right font-bold ${variance > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                                {variance}
                                            </td>
                                            <td className="px-2 py-2 text-right font-black text-gray-800">{utilization}%</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Enrollment Insights */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-black text-[#0B5D3B] mb-4 border-b-2 border-green-300 pb-2">Enrollment Insights</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-bold text-gray-600 uppercase mb-1">Highest Enrollment</p>
                            <p className="text-sm font-black text-[#0B5D3B]">{highestEnrollment.course}</p>
                            <p className="text-xs text-gray-600">{highestEnrollment.enrollment} students enrolled</p>
                        </div>

                        <div>
                            <p className="text-xs font-bold text-gray-600 uppercase mb-1">Lowest Enrollment</p>
                            <p className="text-sm font-black text-orange-600">{lowestEnrollment.course}</p>
                            <p className="text-xs text-gray-600">{lowestEnrollment.enrollment} students enrolled</p>
                        </div>

                        {lowUtilization.length > 0 && (
                            <div>
                                <p className="text-xs font-bold text-gray-600 uppercase mb-2">Below 60% Utilization ({lowUtilization.length})</p>
                                <ul className="space-y-1">
                                    {lowUtilization.slice(0, 5).map((item, idx) => (
                                        <li key={idx} className="text-xs text-gray-700">
                                            • {item.course} ({((item.enrollment / item.capacity) * 100).toFixed(0)}%)
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="bg-white rounded-xl p-3 mt-4">
                            <p className="text-xs font-bold text-gray-600 mb-2">Quick Stats</p>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Morning Shift:</span>
                                <span className="font-bold text-blue-700">
                                    {enrollmentData.filter(c => c.shift === 'Morning').reduce((sum, c) => sum + c.enrollment, 0)}
                                </span>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span className="text-gray-600">Evening Shift:</span>
                                <span className="font-bold text-purple-700">
                                    {enrollmentData.filter(c => c.shift === 'Evening').reduce((sum, c) => sum + c.enrollment, 0)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="mt-6 bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-black text-gray-800 mb-4">Course-wise Enrollment vs Capacity</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            height={100}
                            tick={{ fontSize: 10, fill: '#374151' }}
                        />
                        <YAxis tick={{ fontSize: 12, fill: '#374151' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '2px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '12px'
                            }}
                        />
                        <Legend
                            wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                            iconType="square"
                        />
                        <Bar dataKey="Capacity" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="Enrollment" fill="#0B5D3B" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center text-xs text-gray-500 border-t-2 border-gray-200 pt-4">
                <p className="font-semibold">© 2025-26 Govt. Technical Training Institute, Rahim Yar Khan</p>
                <p className="font-bold">Page 1 | Academic Year 2025-26</p>
            </div>
        </div>
    );
};

export default EnrollmentSlide;
