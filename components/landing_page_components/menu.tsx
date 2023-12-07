import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';

export default function Menu({ menu }) {
    return (
        <div id='menu' className="my-10 max-w-5xl m-auto flex flex-col justify-center items-center gap-7">
            <p className='my-10 font-bold text-4xl'>Chef's Special</p>
            <div className="flex gap-4">
                {menu.map((item, index) => (
                    <Card className='bg-warning-500 data-[hover]:bg-warning-3' shadow="lg" key={index} isPressable isHoverable>
                        <CardBody className="">
                            <Image
                                alt="name"
                                className="w-full object-cover"
                                src={item.image}
                                width={365}
                                height={342}
                            />
                        </CardBody>
                        <CardFooter className="text-lg justify-between">
                            <b>{item.name}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
