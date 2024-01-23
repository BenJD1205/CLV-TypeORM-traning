import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  officeCode: string;

  @Column()
  countryCode: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @ManyToOne(() => User)
  updateBy: User;

  @OneToMany(() => Role, role => role.id)
  role: Role[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}