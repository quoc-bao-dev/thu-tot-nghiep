import { Modal } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const App = () => {
    const { name } = useParams()
    const generateName = (name: string) => {
        if (name.endsWith('nnnsaw323klk')) {
            name = name.slice(0, -12);
            return name
        }
        else return "Thân"

    }
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className='w-screen min-h-screen bg-[#f9f2e9] px-3 md:px-0 py-12'>
            <div className="flex flex-col items-center">
                <p className="md:text-3xl text-xl font-medium text-center ">Thân Mời Bạn {generateName(name!)} Đến Tham Dự</p>
                <motion.div initial={{ opacity: 0, scale: 0.5, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5 }} >
                    <h1 className="md:text-6xl text-5xl font-bold text-center text-[#434242] pt-5">
                        Lễ Tốt Nghiệp
                    </h1>
                    <h1 className="md:text-5xl text-3xl  font-bold text-center text-[#d7a45e] pt-5 font-dancing">
                        của Như Ý
                    </h1>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >
                    <div className="md:w-[38rem] w-full  aspect-[4/3] bg-white mt-5 flex items-center justify-center relative">
                        <img className="md:w-[32rem] w-full p-4 md:p-0 aspect-[4/3] object-contain" src="src\assets\image\nhu y.jpg" alt="" />
                        <div className="absolute w-[5rem] top-0 left-0 ">
                            <img className="absolute w-[4rem] top-0 left-0 -ml-5 -mt-14" src="src\assets\image\light.png" alt="" />
                            <img className="absolute w-[3rem] top-0 left-0 ml-5 -mt-1" src="src\assets\image\light.png" alt="" />
                        </div>
                        <div className="absolute w-[5rem] bottom-[20px]  right-[-20px]">
                            <img className="absolute w-[4rem] top-0 left-0 -ml-5 -mt-14" src="src\assets\image\light.png" alt="" />
                            <img className="absolute w-[3rem] top-0 left-0 ml-5 -mt-1" src="src\assets\image\light.png" alt="" />
                        </div>
                    </div>
                </motion.div>
                <div className="pt-8 flex">
                    <div className="">
                        <p className="text-center text-[#3f3837] font-semibold text-xl md:text-3xl md:w-[20rem] w-[10rem]">10h ngày 22/06</p>
                    </div>
                    <div className="w-[2px] md:h-[80px] h-[60px]  mx-4 bg-[#d7a45e]"></div>
                    <div className="">
                        <p className="text-center text-[#3f3837] font-semibold text-xl md:text-3xl md:w-[20rem] w-[10rem]">Trường ĐH Mở <br /> (cơ sở Q.1)</p>
                    </div>
                </div>
                <div className="pt-10 flex items-center">
                    <button className="md:w-[20rem] md:h-[5rem]  w-[12rem] h-[3rem]  bg-[#d7a45e] text-white font-semibold md:text-3xl text-xl" onClick={open}>Xác nhận tham dự</button>
                </div>
            </div>
            <Modal opened={opened} onClose={close} size={"lg"}>
                <div className="p-5">
                    <h2 className="text-[#3f3837] font-semibold text-xl md:text-3xl text-center">Lời Cảm Ơn</h2>
                    <div className="pt-8">
                        <p className="py-1">Cảm ơn bạn đã dành thời gian đến tham dự lễ tốt nghiệp của mình, sự có mặt của bạn là niềm vinh hạnh của Như Ý.</p>
                        <p className="py-1">Lễ tốt nghiệp này không chỉ là một cột mốc quan trọng trong cuộc đời mình mà còn là dịp để mình nhìn lại hành trình đã qua, và nhận ra rằng không gì có thể đạt được nếu thiếu đi sự ủng hộ và động viên của những người thân yêu. Sự hiện diện của bạn ngày hôm nay đã làm cho ngày này trở nên đặc biệt hơn rất nhiều.</p>
                        <p className="py-1"> Mỗi bước đi trong suốt hành trình học tập vừa qua đều có dấu ấn của tình bạn, sự khích lệ và những khoảnh khắc chia sẻ. Những lúc khó khăn, bạn đã ở bên cạnh, động viên và tiếp thêm sức mạnh cho mình vượt qua. Những niềm vui, thành công mà mình có được ngày hôm nay đều có phần đóng góp không nhỏ từ tình bạn quý báu này.</p>
                        <p className="py-1">Cảm ơn bạn vì đã luôn tin tưởng và sát cánh bên mình. Mình thực sự trân trọng từng khoảnh khắc mà chúng ta đã trải qua cùng nhau. Mình hy vọng rằng tình bạn của chúng ta sẽ mãi bền chặt, và chúng ta sẽ còn nhiều dịp khác để cùng nhau chia sẻ những niềm vui và thành công trong tương lai.</p>
                        <p className="py-1">Một lần nữa, xin chân thành cảm ơn sự hiện diện của bạn trong ngày trọng đại này. Mình mong rằng con đường phía trước của bạn cũng sẽ ngập tràn thành công và hạnh phúc.</p>
                        <p className="py-1">Trân trọng và yêu mến,</p>
                        <p className="font-dancing text-xl"> Như Ý</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default App