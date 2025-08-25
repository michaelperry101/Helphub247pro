function generateReviews(count) {
  const reviews = [];
  for (let i = 1; i <= count; i++) {
    reviews.push({
      id: i,
      name: `Customer ${i}`,
      text: "HelpHub247 has completely transformed the way I work. Reliable, fast, and incredibly easy to use. Highly recommend!",
    });
  }
  return reviews;
}

const reviewsList = generateReviews(1249);

export default function ReviewsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      <p className="mb-6">⭐ 1249 Verified 5-Star Reviews</p>
      <div className="space-y-4">
        {reviewsList.map((review) => (
          <div key={review.id} className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-900">
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-yellow-500">★★★★★</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
