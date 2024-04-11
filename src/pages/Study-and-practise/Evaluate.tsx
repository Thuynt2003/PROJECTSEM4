import React, { useEffect, useState } from "react";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import axios from "axios";
import { Select } from 'antd';
import { Button, Modal } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
    key: number;
    Stt: number;
    Ho_Ten: string;
    Ngay_sinh: string;
    Nhan_Xet: JSX.Element;
    Trang_Thai: string
}
interface DataAllClass {
    classId: string,
    className: string,
    SchoolBlock: {
        schoolBlockId: string,
        schoolBlockName: number
    }
}
interface Student {
    id: number,
    gender: boolean,
    firstName: string,
    lastName: string,
    birthday: string,
    address: string,
    status: number,
    studentCode: string,
}
interface Acknowledge {
    id: number,
    Acknowledge: string
}
const Evaluate = () => {
    const AllClasses: DataAllClass[] = [{
        "classId": "01",
        "className": "1a1",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    }, {
        "classId": "02",
        "className": "1a2",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    },
    {
        "classId": "03",
        "className": "1a3",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    },
    {
        "classId": "04",
        "className": "1a4",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    },
    {
        "classId": "05",
        "className": "1a5",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    },
    {
        "classId": "06",
        "className": "1a6",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": 1
        }
    },
    {
        "classId": "07",
        "className": "2a1",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    },
    {
        "classId": "08",
        "className": "2a2",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    },
    {
        "classId": "09",
        "className": "2a3",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    },
    {
        "classId": "10",
        "className": "2a4",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    },

    {
        "classId": "11",
        "className": "2a5",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    }, {
        "classId": "12",
        "className": "2a6",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": 2
        }
    },
    {
        "classId": "13",
        "className": "3a1",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    }
        ,
    {
        "classId": "14",
        "className": "3a2",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    }
        ,
    {
        "classId": "15",
        "className": "3a3",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    }
        ,
    {
        "classId": "16",
        "className": "3a4",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    }
        ,
    {
        "classId": "17",
        "className": "3a5",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    }
        ,
    {
        "classId": "18",
        "className": "3a6",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": 3
        }
    },
    {
        "classId": "19",
        "className": "4a1",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "20",
        "className": "4a2",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "21",
        "className": "4a3",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "22",
        "className": "4a4",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "23",
        "className": "4a5",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "24",
        "className": "4a6",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": 4
        }
    },
    {
        "classId": "25",
        "className": "5a1",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    },
    {
        "classId": "26",
        "className": "5a2",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    },
    {
        "classId": "27",
        "className": "5a3",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    },
    {
        "classId": "28",
        "className": "5a4",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    },
    {
        "classId": "29",
        "className": "5a5",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    },
    {
        "classId": "30",
        "className": "5a6",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": 5
        }
    }
    ];
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    //modal
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    //modal
    const [student, setStudent] = useState<Student[]>([])
    // cont
    const getStudents = async () => {
        const s = await axios.get('http://14.248.97.203:4869/api/v1/student/students');
        setStudent(s.data);
    }
    useEffect(() => {
        getStudents();
    }, [student])
    const rowSelection: TableRowSelection<DataType> = {
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };


    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const [classes, setClasses] = useState("1a1");
    const [classNameClass, setClassNameClass] = useState("hiddens");
    const [evaluate, setEvaluate] = useState("semester_once");

    const choseClass = (className: string) => {
        setClasses(className);
        setClassNameClass("hiddens")

    }

    const options = AllClasses.map(c => ({
        value: c.className,
        label: c.className
    }));
    return (
        <div className="evaluate ">
            <div className="bg-gray-200 h-10 flex">
                <div className={`flex items-center justify-center px-14 cursor-context-menu ${evaluate === "semester_once" ? "border-t-2 border-green-500 bg-white w-189 px-0" : ""}`} onClick={() => setEvaluate("semester_once")}>
                    Học Kỳ 1
                </div>
                <div className={`flex items-center justify-center px-14 cursor-context-menu ${evaluate === "semester_two" ? "border-t-2 border-green-500 bg-white w-189 px-0" : ""}`} onClick={() => setEvaluate("semester_two")}>
                    Học Kỳ 2
                </div>
                <div className={`flex items-center justify-center px-14 cursor-context-menu ${evaluate === "the_whole_school_year" ? "border-t-2 border-green-500 bg-white w-189 px-0" : ""}`} onClick={() => setEvaluate("the_whole_school_year")}>
                    Cả năm
                </div>
            </div>
            <div className={`${evaluate !== "semester_once" ? "hidden" : "semester_once"}`}>
                <div style={{ display: "flex", padding: "16px" }}>
                    <div style={{ marginRight: "14px" }}>
                        <Select style={{ width: "100px", height: "38px" }} options={options} defaultValue={options[0].value} />
                    </div>
                    <Space direction="vertical">
                        <DatePicker style={{ height: "38px" }} disabledDate={(date) => {
                            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
                        }} />
                    </Space>
                    <div style={{ width: "560px" }}>
                        <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
                    </div>
                </div>
                <div className="mx-15">
                    <Table

                        rowSelection={{
                            ...rowSelection,
                        }}
                        columns={columnsAttendenceByDay}
                        dataSource={dataAttendenceByDay}
                        pagination={false}
                        bordered
                        scroll={{ y: 385 }}
                    />
                </div>
                <div className="w-full mt-4">
                    <Button type="primary" className="float-right mr-4 bg-green-600 " style={{ background: "rgb(52, 150, 52)" }}>Lưu Lại</Button>
                </div>
                <div className="submit">
                    <Button type="primary" className="float-right mr-4 bg-green-600" style={{ background: "rgb(52, 150, 52)" }}>Sửa Đổi</Button>
                </div>
            </div>
            <div className={`${evaluate !== "semester_two" ? "hidden" : "semester_two"}`}>
                <div style={{ display: "flex", padding: "16px" }}>
                    <div style={{ marginRight: "14px" }}>
                        <Select style={{ width: "100px", height: "38px" }} options={options} defaultValue={options[0].value} />
                    </div>
                    <Space direction="vertical">
                        <DatePicker style={{ height: "38px" }} disabledDate={(date) => {
                            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
                        }} />
                    </Space>
                    <div style={{ width: "560px" }}>
                        <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
                    </div>
                </div>
                <div className="mx-15">
                    <Table

                        rowSelection={{
                            ...rowSelection,
                        }}
                        columns={columnsAttendenceByDay}
                        dataSource={dataAttendenceByDay}
                        pagination={false}
                        bordered
                        scroll={{ y: 385 }}
                    />
                </div>
                <div className="w-full mt-4">
                    <Button type="primary" className="float-right mr-4 bg-green-600 " style={{ background: "rgb(52, 150, 52)" }}>Lưu Lại</Button>
                </div>
                <div className="submit">
                    <Button type="primary" className="float-right mr-4 bg-green-600" style={{ background: "rgb(52, 150, 52)" }}>Sửa Đổi</Button>
                </div>
            </div>
            <div className={`${evaluate !== "the_whole_school_year" ? "hidden" : "the_whole_school_year"}`}>
                <div style={{ display: "flex", padding: "16px" }}>
                    <div style={{ marginRight: "14px" }}>
                        <Select style={{ width: "100px", height: "38px" }} options={options} defaultValue={options[0].value} />
                    </div>
                    <Space direction="vertical">
                        <DatePicker style={{ height: "38px" }} disabledDate={(date) => {
                            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
                        }} />
                    </Space>
                    <div style={{ width: "560px" }}>
                        <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
                    </div>
                </div>
                <div className="mx-15">
                    <Table

                        rowSelection={{
                            ...rowSelection,
                        }}
                        columns={columnsAttendenceByDay}
                        dataSource={dataAttendenceByDay}
                        pagination={false}
                        bordered
                        scroll={{ y: 385 }}
                    />
                </div>
                <div className="w-full mt-4">
                    <Button type="primary" className="float-right mr-4 bg-green-600 " style={{ background: "rgb(52, 150, 52)" }}>Lưu Lại</Button>
                </div>
                <div className="submit">
                    <Button type="primary" className="float-right mr-4 bg-green-600" style={{ background: "rgb(52, 150, 52)" }}>Sửa Đổi</Button>
                </div>
            </div>
        </div >
    )

}
export default Evaluate;