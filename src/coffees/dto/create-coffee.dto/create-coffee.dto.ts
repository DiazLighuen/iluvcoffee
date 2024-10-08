import { IsString } from "class-validator";
import { ApiProperty, PartialType } from '@nestjs/swagger';


export class CreateCoffeeDto {
    @ApiProperty({ description: 'The name of a coffee.' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: 'The brand of a coffee.' })
    @IsString()
    readonly brand: string;

    @ApiProperty({ example: [] })
    @IsString({each: true})
    readonly flavors: string[];
}
