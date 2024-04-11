import React, { useEffect, useState } from "react";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import axios from "axios";
import { Select } from 'antd';
import { Button, Modal } from 'antd';

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
const Acknowledge = () => {
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
  const Acknowledge: Acknowledge[] = [{
    id: 1,
    Acknowledge: "Học sinh hăng hái phát xây dựng biểu bài"
  },
  {
    id: 2,
    Acknowledge: "Biết giúp đỡ bạn bè trong học tập"
  },
  {
    id: 3,
    Acknowledge: "Học sinh hay mất trật tự"
  },
  {
    id: 4,
    Acknowledge: "Biết cách đánh vần to,dõng dạc"
  },
  {
    id: 5,
    Acknowledge: "Biết cách làm việc theo nhóm"
  },
  {
    id: 6,
    Acknowledge: "Tích cực tham gia phát biểu xây dựng bài,hăng hái các hoạt động lớp"
  }]
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
  const acknowledge = Acknowledge.map(a => ({
    value: a.Acknowledge,
    label: a.Acknowledge
  }));


  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const columnsAcknowledge: TableColumnsType<DataType> = [
    {
      title: 'Stt',
      dataIndex: 'Stt',
      key: 'Stt',
      width: '5%',
      align: "center"
    },
    {
      title: 'Họ tên',
      dataIndex: 'Ho_Ten',
      key: 'Ho_Ten',
      width: '25%',
      align: "center"
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'Ngay_sinh',
      key: 'Ngay_sinh',
      width: '14%',
      align: "center"
    },
    {
      title: 'Nhận xét',
      dataIndex: 'Nhan_Xet',
      width: '35%',
      key: 'Nhan_Xet',
      align: "center"
    },
    {
      title: 'Trạng thái',
      dataIndex: 'Trang_Thai',
      width: '14%',
      key: 'Trang_Thai',
      align: "center"
    }
  ];
  // const dataAcknowledge = student.map((data) => ({
  //   key: data.id,
  //   Ho_Ten: data.lastName + data.firstName, // Assuming `s` contains the name of the student
  //   Ngay_sinh: data.birthday.split('T')[0],
  //   Stt: data.id,
  //   Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
  // Trang_Thai: 0?"chưa thông báo":"Đã thông báo"

  // }));
  const dataAcknowledge = [{
    key: 1,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 1,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "Chưa thông báo"
  },
  {
    key: 2,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 2,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "Chưa thông báo"
  },
  {
    key: 3,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 3,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "chưa thông báo "
  },
  {
    key: 4,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 4,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "Chưa thông báo"
  },
  {
    key: 5,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 5,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "Chưa thông báo"
  },
  {
    key: 6,
    Ho_Ten: "data.lastName + data.firstName", // Assuming `s` contains the name of the student
    Ngay_sinh: "data.birthday.split('T')[0]",
    Stt: 6,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />,
    Trang_Thai: "Chưa thông báo"
  },

  ]
  const [classes, setClasses] = useState("1a1");
  const [classNameClass, setClassNameClass] = useState("hiddens");
  const choseClass = (className: string) => {
    setClasses(className);
    setClassNameClass("hiddens")

  }
  const options = AllClasses.map(c => ({
    value: c.className,
    label: c.className
  }));
  return (
    <div className="acknowledge ">
      <div style={{ display: "flex", padding: "16px" }}>
        <div style={{ marginRight: "14px" }}>
          <Select style={{ width: "100px", height: "38px" }} options={options} defaultValue={options[0].value} />
        </div>
        <Space direction="vertical">
          <DatePicker style={{ height: "38px" }} disabledDate={(date) => {
            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
          }} />
        </Space>
        <div className="mx-4 border flex items-center rounded-lg justify-center" style={{ width: "260px", height: "38px"}}>
          Tổng số học sinh : 38
        </div>
        <div style={{ width: "100%" }}>
          <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
          <Button type="primary" style={{ float: "right", background: "#349634", marginRight: "7px" }} onClick={showModal}>Nhận xét nhanh</Button>      </div>
      </div>
      <Modal
        open={open}
        title="Nhận xét nhanh"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Huỷ bỏ
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk} style={{ background: "rgb(52, 150, 52" }}>
            Lưu
          </Button>
        ]}
      >
        <div>
          <p>Nhận xét <span style={{ color: "red" }}>*</span></p>
          <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />
        </div>
        <div style={{ marginTop: "15px" }}>
          <p>Nhận xét học sinh:</p>
          <div>
            <span>
              Nguyễn Phúc Khang,
            </span>
            <span>
              Nguyễn Phúc Khang ,
            </span>
            <span>
              Nguyễn Phúc Khang ,
            </span>
          </div>
        </div>
      </Modal>
      <div className="mx-15">
        <Table

          rowSelection={{
            ...rowSelection,
          }}
          columns={columnsAcknowledge}
          dataSource={dataAcknowledge}
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
    </div >
  )

}
export default Acknowledge;