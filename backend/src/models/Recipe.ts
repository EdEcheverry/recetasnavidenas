import mongoose, {Schema,Document} from 'mongoose';

export interface IRecipe extends Document{
    tittle:string;
    category:string;
    ingredients:string;
    instruction:string;
    image?: string;
}

const RecipeSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    image: { type: String },
});

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);