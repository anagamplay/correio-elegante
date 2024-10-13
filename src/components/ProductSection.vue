<template>
    <section class="container products">
        <div class="row">
            <div class="col-md-6 col-12 mb-4" style="margin-left: 0; padding-left: 0;">
                <div class="product">
                    <div class="row">
                        <div class="col-md-6 text-start"> 
                            <h2>Maçã do Amor</h2>
                            <p class="price">Escolha o sabor:</p>
                            <div class="form-check">
                                <input class="form-check-input radio-button" type="radio" id="tradicional" name="sabor" value="tradicional" checked />
                                <label class="form-check-label" for="tradicional">Tradicional - R$ 5,00</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input radio-button" type="radio" id="chocolate" name="sabor" value="chocolate" />
                                <label class="form-check-label" for="chocolate">De Chocolate - R$ 5,00</label>
                            </div>
                            <p></p>
                            <p><b>Quantidade:</b> 1 unidade.</p>
                            <div class="mt-3">
                                <button class="btn btn-primary me-2 w-100"> <i class="fas fa-shopping-cart"></i> Comprar</button> 
                                <button class="btn btn-secondary w-100"> <i class="fas fa-plus-circle"></i> Adicionar ao Carrinho</button> 
                            </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="@/assets/maca-do-amor.png" alt="Maçã do Amor" style="width: 100%;" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mb-4" style="margin-right: 0; padding-right: 0;">
                <div class="product">
                    <h2>Correio Elegante</h2>
                    <p class="price">R$ 2,50</p>
                    <button class="btn btn-primary w-100"> <i class="fas fa-shopping-cart"></i> Comprar</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProductSection"
};
</script>

<style scoped>
.products {
    margin-top: 3rem;
}

.product {
    text-align: center;
    background-color: #eccecf;
    padding: 3rem;
    border-radius: 25px;
}

h2 {
    font-weight: 700;
    margin-bottom: 20px;
}

.form-check, .form-check-label{
    margin: 0;
    padding: 0;
}

.price {
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1;
    font-family: "Crimson Text", serif;
}

.product img {
    width: 100px;
    margin-bottom: 15px;
}

label {
    margin-left: 15px;
}

.form-check-input {
    position: absolute; 
    opacity: 0;
}

.form-check-label {
    margin-bottom: 10px;
}

.form-check-label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #474544; 
    border-radius: 50%;
    margin-right: 10px; 
    vertical-align: middle;
    transition: background-color 0.3s;
    background-color: white;
}

.form-check-input:checked + .form-check-label::before {
    background-color: #741736; 
    border: 2px solid #741736; 
}

.form-check-input:hover + .form-check-label::before {
    border-color: #474544;
}

button {
    background-color: #741736;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #741736;
    color: white;
}
</style>

