@if (isset($products))
    <div class="row">
        @foreach ($products as $product)
            <div class="col-md-6 col-sm-12">
                <h5>{{$product->name}}</h5>
                <a href="{{ url('/shop/'.$product->id) }}"><img class="img-thumbnail" alt="product id {{ $product->id }}"
                                                     width="300" height="200"
                                                     src="{{ asset('images/'.$product->image) }}">
                </a>
                <p>Price: {{$product->price}}</p>
            </div>
            @if($loop->iteration  % 2 == 0)
                <div class="clearfix"></div>
            @endif
        @endforeach
    </div>
@endif
