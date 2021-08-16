import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService} from './../../../core/service/products.service';
import { MyValidators } from './../../../../utils/validators';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        console.log(product);
        this.form.patchValue( 
          product //al coincidir tanto lo que se trae asi como lo que se quiere colocar
        ) //solo se debe colocar como tal la respuesta json y ya que el automaticamente
      })//hace el match
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((product) =>{
        console.log(product);
        this.router.navigateByUrl('admin/products-list');
      })
    }
    console.log(this.form.value)
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    })
  }

  get priceField(){
    return this.form.get('price');
  }

}
