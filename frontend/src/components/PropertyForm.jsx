  import { useForm } from 'react-hook-form';

  const PropertyForm = ({ onSubmit, initialData = {}, buttonText = 'Submit' }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: initialData
    });
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            {...register('title', { required: 'Title is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full p-2 border rounded"
            rows="3"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1">Address</label>
          <input
            {...register('address', { required: 'Address is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Price</label>
            <input
              type="number"
              {...register('price', { required: 'Price is required', min: 0 })}
              className="w-full p-2 border rounded"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>
  
          <div>
            <label className="block text-gray-700 mb-1">Bedrooms</label>
            <input
              type="number"
              {...register('bedrooms', { required: 'Bedrooms is required', min: 0 })}
              className="w-full p-2 border rounded"
            />
            {errors.bedrooms && <p className="text-red-500 text-sm">{errors.bedrooms.message}</p>}
          </div>
  
          <div>
            <label className="block text-gray-700 mb-1">Bathrooms</label>
            <input
              type="number"
              {...register('bathrooms', { required: 'Bathrooms is required', min: 0 })}
              className="w-full p-2 border rounded"
            />
            {errors.bathrooms && <p className="text-red-500 text-sm">{errors.bathrooms.message}</p>}
          </div>
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1">Square Feet</label>
          <input
            type="number"
            {...register('sqft', { required: 'Square feet is required', min: 0 })}
            className="w-full p-2 border rounded"
          />
          {errors.sqft && <p className="text-red-500 text-sm">{errors.sqft.message}</p>}
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1">Image URL</label>
          <input
            {...register('image')}
            className="w-full p-2 border rounded"
          />
        </div>
  
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </form>
    );
  };
  
  export default PropertyForm;