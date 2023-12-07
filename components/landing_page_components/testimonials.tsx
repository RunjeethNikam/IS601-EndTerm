import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function Testimonials({ testimonials }) {
    return (
        <div id='reviews' className="max-w-5xl py-10 m-auto flex flex-col justify-center items-center gap-20">
            <p className='font-bold text-4xl'>Foodies Experience</p>
            <div className="flex gap-24 sm:flex-nowrap">
                {testimonials.map((item, index) => (
                    <Card className=' max-w-[450px] bg-[#FF9C6A] data-[hover]:bg-warning-100' shadow="lg" key={index} isHoverable>
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar isBordered color="warning" radius="full" size="lg" src={item.image} />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-lg font-bold leading-none">{item.name}</h4>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 text-md py-3">
                            <p>
                                {item.content}
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="">
                            <div className="flex w-full justify-between font-bold">
                                <p>Rating</p>
                                <p className="">{item.rating}/5</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button
                className="text-black font-bold shadow-2xl shadow-amber-700"
                size="lg"
                as={Link}
                href="#"
                variant="solid"
                color='warning'
            >
                KNOW MORE ABOUT US
            </Button>
        </div>
    );
}
