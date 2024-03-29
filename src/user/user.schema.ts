import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class User {
   @Prop()
   firstName: string;
   @Prop()
   lastName: string;
   @Prop()
   password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);